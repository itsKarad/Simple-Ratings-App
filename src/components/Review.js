import React from "react";
import Stars from "./Stars";
import './Review.css';

const Review = (props) => {
    return (
        <div className = "review-container">
            <Stars rating = {props.review.rating}></Stars>
            <div className = "review-text">
                <p><span className="strong-span">{props.review.rating/2}</span><span className = "review-text-span">, {props.review.text}</span></p>
            </div>
        </div>
    );
};

export default Review;