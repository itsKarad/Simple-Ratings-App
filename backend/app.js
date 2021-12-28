const express = require('express');
const app = express();

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

app.get("/", (req, res) => {
    res.json({product: DUMMY_PRODUCT});
});



const PORT = 8000;
app.listen(PORT, (req, res) => {
    console.log("Listening on PORT " + PORT);

});