import React, {useState, useEffect} from 'react';
import { io } from "socket.io-client";

import Modal from './Form/Modal';
import './ProductReviewSection.css';
import Reviews from './Reviews';
import Stars from './Stars';


const ProductReviewSection = (props) => {
    useEffect(() => {
        const socket = io(process.env.REACT_APP_BACKEND_URL);
        socket.on("connect", () => {
            console.log("Connecting..." + socket.id);
        });
        socket.on("update", (prod) => {
            console.log(prod);
            setProduct(prod);
        });
    }, []);

    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchReviews = async () => {
            setIsLoading(true);
            const response = await fetch(process.env.REACT_APP_BACKEND_URL);
            if(!response.ok){
              setError("Cannot fetch reviews!");
            }
            const data = await response.json();
            console.log(data.product);
            setProduct(data.product);
            setIsLoading(false);
          }
        fetchReviews();  
    }, []); 
    const calculateAverageRating = (reviews) => {
        if(!reviews || reviews.length === 0){
            return "?";
        }
        let sumOfRating = 0;
        let numberOfReviews = 0;
        for(let i = 0; i < reviews.length; i += 1){
            sumOfRating += reviews[i].rating;
            numberOfReviews += 1;
        }
        let avgRating = sumOfRating / numberOfReviews;
        avgRating /= 2;
        return avgRating.toFixed(1);
    };
    const [showReviewForm, setShowReviewForm] = useState(false);
    const toggleReviewFormHandler = () => {
        const previousVal = showReviewForm;
        setShowReviewForm(!previousVal);
    };
    const submitFormHandler = async(review) => {
        // Send POST request to backend
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/add-review/${product.id}`, {
            method: "POST",
            body: JSON.stringify({
                text: review.text,
                rating: review.rating,
            }),
            headers:{
                "Content-Type": "application/json"
            }
        });
        console.log(response);

        toggleReviewFormHandler();
    }
    if(error){
        return (<div>
            <h1>
                Something went wrong while fetching the product.
            </h1>
        </div>)
    }
    if(isLoading){
        return (
            <div>
                Loading...
            </div>
        );
    }
    else{
        return (
            <React.Fragment>
                <Modal show = {showReviewForm} onSubmit = {submitFormHandler} onCancel = {toggleReviewFormHandler}></Modal>
                <div className="product-item">
                    <div className = "product-info">
                        <h1 className = "product-title">{product.title}</h1>
                    </div>
                    <div className = "product-ratings">
                        <div className = "product-rating">
                            <div className = "avg-rating">
                                {calculateAverageRating(product.reviews)}
                            </div>
                            <div className = "avg-stars">
                                <Stars rating = {calculateAverageRating(product.reviews)*2}></Stars>
                            </div>
                        </div>            
                        <div className = "product-actions">
                            <button className = "btn" onClick = {toggleReviewFormHandler}>Add review</button>
                        </div>
                    </div>
                    <div className = "divider"></div>
                    <div className = "product-reviews">
                        <h2 className = "reviews-header">Reviews</h2>
                        <Reviews reviews = {product.reviews}></Reviews>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    
};

export default ProductReviewSection;