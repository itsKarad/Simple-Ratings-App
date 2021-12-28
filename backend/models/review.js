const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,
    },
    text: {
        type: String,
        default: "",
    },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;