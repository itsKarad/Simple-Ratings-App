import React from 'react';
import Review from './Review';
const Reviews = (props) => {
    return (
        <div className = "reviews-container">
            {props.reviews.map((r, idx) => {
                return (<Review review = {r} key = {idx}></Review>);
            })}
        </div>
    );
};

export default Reviews;