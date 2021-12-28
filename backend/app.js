const express = require('express');
const app = express();
const connectDB = require("./db/connect-db");
const Review = require("./models/review");
const Product = require("./models/product");


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

const DUMMY_PRODUCT = {
    id: "p1",
    title: "The Minimalist Entrepreneur",
    reviews: [
        {
            rating: 4,
            text: "Very good",
        },
        {
            rating: 1,
            text: "Meh!",
        },
        {
            rating: 4,
            text: "Wow!",
        },
        {
            rating: 4,
            text: "Wow2!",
        }
    ],
};

app.get("/", async(req, res) => {
    const products = await Product.find({}).populate("reviews");
    const product = products[0];
    // sending only one product
    res.json({product: product});
});

app.post("/review", async(req, res) => {
    const {review} = req.body;

});

const PORT = 8000;
app.listen(PORT, (req, res) => {
    console.log("Listening on PORT " + PORT);

});