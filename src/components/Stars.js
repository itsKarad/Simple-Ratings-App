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
            {ARR.map((val) => {
                return (
                    <Star
                        value = {val}
                        active = {rating >= val}
                        onClick = {starClickHandler}
                    ></Star>
                );
            })}
        </div>
    );
};

export default Stars;