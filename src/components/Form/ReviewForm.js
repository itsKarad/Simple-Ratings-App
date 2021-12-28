import React, {useRef, useState} from "react";
import styles from './ReviewForm.module.css';
import Stars from "../Stars";

const ReviewForm = (props) => {
    const reviewTextRef = useRef("");
    const [reviewRating, setReviewRating] = useState(0);
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
        <div className = {styles["review-form-container"]}>
            <div className = {styles["form-header"]}>
                What's your rating?
            </div>
            <div className={styles["form"]}>
                <div className = {styles["form-rating"]}>
                    <p className = {styles["form-heading"]}>Rating</p>
                    <Stars allowInput = {true} onStarClick = {starClickHandler} rating = {0}></Stars>
                </div>
                <div className={styles["form-review"]}>
                    <p className = {styles["form-heading"]}>Review</p>
                    <div className = {styles["form-review-container"]}>
                        <textarea 
                            ref = {reviewTextRef} 
                            placeholder = "Start typing..."
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className = {styles["form-actions"]}>
                <button className = {styles["btn"]} onClick = {submitReviewHandler}>Submit review</button>
            </div>
        </div>
    );
};

export default ReviewForm;