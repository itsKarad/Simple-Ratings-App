import React, {useRef, useState} from "react";
import './ReviewForm.css';
import Stars from "../Stars";

const ReviewForm = (props) => {
    const reviewTextRef = useRef("");
    const [reviewRating, setReviewRating] = useState(2);
    const submitReviewHandler = (e) => {
        e.preventDefault();
        props.onSubmit({
            text: reviewTextRef.current.value,
            rating: reviewRating
        });
    };
    const starClickHandler = (val) => {
        setReviewRating(val);
    };

    return (
        <div className="review-form-container">
            <div className = "form-header">
                What's your rating?
            </div>
            <div className="form">
                <div className = "form-rating">
                    <p className = "form-heading">Rating</p>
                    <Stars allowInput = {true} onStarClick = {starClickHandler}></Stars>
                </div>
                <div className="form-review">
                    <p className = "form-heading">Review</p>
                    <div className = "form-review-container">
                        <textarea 
                            ref = {reviewTextRef} 
                            placeholder = "Start typing..."
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className = "form-actions">
                <button className = "btn" onClick = {submitReviewHandler}>Submit Review</button>
            </div>
        </div>
    );
};

export default ReviewForm;