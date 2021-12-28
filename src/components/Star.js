import React from 'react';
import './Star.css';

const Star = (props) => {
    const clickHandler = () => {
        props.onClick(props.value);
    }
    return (
        <div className = "star-container">
            <span onClick={clickHandler} className={`star ${props.active ? "active" : ""}`}>
                &#9733;
            </span>
        </div>
    )
};

export default Star;