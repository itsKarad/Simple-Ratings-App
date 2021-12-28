import React from 'react';
import './ProductReviewSection.css';
import Review from './Review';

const ProductReviewSection = (props) => {
    const DUMMY_REVIEW = {
        rating: 4,
        text: "Very good!",
    };
    return (
        <div className="product-item">
            <div class = "product-info">
                <h1 className = "product-title">The Minimalist Entrepreneur</h1>
            </div>
            <div className = "product-ratings">
                <div className = "product-rating">
                    {1.2}
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