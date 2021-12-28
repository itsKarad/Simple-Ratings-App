const express = require('express');
const app = express();
const connectDB = require("./db/connect-db");
const Review = require("./models/review");
const Product = require("./models/product");

const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  }
);

io.on("connection", (socket) => {
    let i=1;
    console.log("Connecting client with ID: " + socket.id);
    
});

// Connecting database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// CORS workaround
app.use((req, res, next) => {
    // Adding headers before forwarding
    // Which domains should be allowed?
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Which methods should be allowed?
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS",
        "Access-Control-Allow-Origin",
    );
    // Which headers should be allowed?
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );

    next();
});


app.get("/", async(req, res) => {
    const products = await Product.find({}).populate("reviews");
    const product = products[0];
    // sending only one product
    res.json({product: product.toObject({getters: true})});
});

app.post("/add-review/:productID", async(req, res) => {
    const productID = req.params.productID;
    console.log(productID);
    const {text, rating} = req.body;
    console.log(req.body);
    const newReview = new Review({
        rating: rating,
        text: text,
    });
    const foundProduct = await Product.findById(productID).populate("reviews");
    foundProduct.reviews.push(newReview);
    await foundProduct.save();
    await newReview.save();
    // io.broadcast.emit();
    io.emit("update", foundProduct.toObject({getters: true}));
    res.json({
        message: "Added review!"
    });
    

});

const PORT = 8000;
httpServer.listen(PORT);
// app.listen(PORT, (req, res) => {
//     console.log("Listening on PORT " + PORT);

// });