import React from 'react';
import './Stars.css';
import Star from './Star';

const Stars = (props) => {
    const [rating, setRating] = React.useState(props.rating);
    const ARR = [ 0, 1, 2, 3, 4];

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
                        key = {val}
                        value = {2*val}
                        activeLeft = {rating >= 2*val + 1}
                        activeRight = {rating >= 2*val + 2}
                        onClick = {starClickHandler}
                    ></Star>
                );
            })}
        </div>
    );
};

export default Stars;