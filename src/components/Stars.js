import React from 'react';
import './Stars.css';
import Star from './Star';

const Stars = (props) => {
    const [rating, setRating] = React.useState(props.rating);
    const ARR = [ 1, 2, 3, 4, 5];
    return (
        <div className = "stars-container">
            <Star value = {1} active = {rating>=1}></Star>
            <Star value = {2} active = {rating>=2}></Star>
            <Star value = {3} active = {rating>=3}></Star>
            <Star value = {4} active = {rating>=4}></Star>
            <Star value = {5} active = {rating>=5}></Star>
        </div>
    );
};

export default Stars;