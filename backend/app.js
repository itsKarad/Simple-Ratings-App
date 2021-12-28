const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Working.");
});


const PORT = 8000;
app.listen(PORT, (req, res) => {
    console.log("Listening on PORT " + PORT);

});