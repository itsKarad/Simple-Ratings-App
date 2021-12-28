import React from 'react';
import './Star.css';

const Star = (props) => {
    return (
        <div className = "star-container">
            <span className={`star ${props.active ? "active" : ""}`}>
                &#9733;
            </span>
        </div>
    )
};

export default Star;