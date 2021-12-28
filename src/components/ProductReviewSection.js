import React from 'react';
import './ProductReviewSection.css';
import Review from './Review';

const ProductReviewSection = (props) => {
    const DUMMY_REVIEW = {
        rating: 4,
        text: "Very good!",
    };
    const DUMMY_PRODUCT = {
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
            }
        ],
    };
    const calculateAverageRating = (reviews) => {
        let sumOfRating = 0;
        let numberOfReviews = 0;
        for(let i = 0; i < reviews.length; i += 1){
            sumOfRating += reviews[i].rating;
            numberOfReviews += 1;
        }
        let avgRating = sumOfRating / numberOfReviews;
        return avgRating;
    }
    return (
        <div className="product-item">
            <div class = "product-info">
                <h1 className = "product-title">DUMMY_PRODUCT.title</h1>
            </div>
            <div className = "product-ratings">
                <div className = "product-rating">
                    {calculateAverageRating(DUMMY_PRODUCT.reviews)}
                </div>            
                <div className = "product-rating-form">
                    <div className = "product-actions">
                        <button class = "btn" onClick = {() => {}}>Add review</button>
                    </div>
                </div>
                
            </div>
            <div className = "divider">
            </div>
            <div class = "product-reviews">
                <h2 class = "reviews-header">Reviews</h2>
                <Review review = {DUMMY_REVIEW}></Review>
            </div>
        </div>
    )
};

export default ProductReviewSection;