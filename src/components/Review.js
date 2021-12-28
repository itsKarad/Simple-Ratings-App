import React from "react";

const Review = (props) => {
    return (
        <div className = "review-container">
            *****
            <div className = "review-text">
                <p><strong>{props.review.rating}</strong>, <span class = "review-text-span">{props.review.text}</span></p>
            </div>
        </div>
    );
};

export default Review;