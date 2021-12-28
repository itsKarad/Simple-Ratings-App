import React from 'react';
import './Stars.css';
import Star from './Star';

const Stars = (props) => {
    const [rating, setRating] = React.useState(props.rating);
    const ARR = [ 1, 2, 3, 4, 5];

    const starClickHandler = (val) => {
        if(!props.allowInput){
            return;
        }
        // Let the parent know
        props.onStarClick(val);
        //console.log(val);
        setRating(val);
    };

    return (
        <div className = "stars-container">
            <Star value = {1} active = {rating>=1} onClick = {starClickHandler}></Star>
            <Star value = {2} active = {rating>=2} onClick = {starClickHandler}></Star>
            <Star value = {3} active = {rating>=3} onClick = {starClickHandler}></Star>
            <Star value = {4} active = {rating>=4} onClick = {starClickHandler}></Star>
            <Star value = {5} active = {rating>=5} onClick = {starClickHandler}></Star>
        </div>
    );
};

export default Stars;