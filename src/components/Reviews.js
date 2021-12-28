import React from 'react';
import Review from './Review';
const Reviews = (props) => {
    return (
        <div className = "reviews-container">
            {props.reviews.map((r) => {
                return (<Review review = {r}></Review>);
            })}
        </div>
    );
};

export default Reviews;