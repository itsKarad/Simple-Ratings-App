import React, {useRef} from "react";
import './ReviewForm.css';
import Stars from "../Stars";

const ReviewForm = (props) => {
    const reviewRef = useRef("");
    const submitReviewHandler = () => {

    };
    const starClickHandler = () => {

    };

    return (
        <div className="review-form-container">
            <div className = "form-header">
                What's your rating?
            </div>
            <div className="form">
                <div className = "form-rating">
                    <p class = "form-heading">Rating</p>
                    <Stars allowInput = {true} onStarClick = {starClickHandler}></Stars>
                </div>
                <div className="form-review">
                    <p class = "form-heading">Review</p>
                    <div className = "form-review-container">
                        <textarea 
                            ref = {reviewRef} 
                            placeholder = "Start typing..."
                        ></textarea>
                    </div>
                </div>
            </div>
            <div class = "form-actions">
                <button className = "btn" onClick = {submitReviewHandler}>Submit Review</button>
            </div>
        </div>
    );
};

export default ReviewForm;