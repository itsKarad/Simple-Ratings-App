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

app.get("/", (req, res) => {
    res.send("Working.");
});



const PORT = 8000;
app.listen(PORT, (req, res) => {
    console.log("Listening on PORT " + PORT);

});