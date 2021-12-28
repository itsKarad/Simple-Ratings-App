import React from "react";
import Stars from "./Stars";

const Review = (props) => {
    return (
        <div className = "review-container">
            <Stars rating = {props.review.rating}></Stars>
            <div className = "review-text">
                <p><strong>{props.review.rating}</strong>, <span class = "review-text-span">{props.review.text}</span></p>
            </div>
        </div>
    );
};

export default Review;