import React, {useState, useEffect} from 'react';
import Modal from './Form/Modal';
import './ProductReviewSection.css';
import Reviews from './Reviews';

const ProductReviewSection = (props) => {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            setIsLoading(true);
            const response = await fetch("http://localhost:8000");
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
        let sumOfRating = 0;
        let numberOfReviews = 0;
        for(let i = 0; i < reviews.length; i += 1){
            sumOfRating += reviews[i].rating;
            numberOfReviews += 1;
        }
        let avgRating = sumOfRating / numberOfReviews;
        return avgRating.toFixed(1);
    };
    const [showReviewForm, setShowReviewForm] = useState(false);
    const toggleReviewFormHandler = () => {
        const previousVal = showReviewForm;
        setShowReviewForm(!previousVal);
    };
    const submitFormHandler = (review) => {
        //console.log(review);
        const previousProduct = product;
        previousProduct.reviews.push(review);
        setProduct(previousProduct);
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
                            {calculateAverageRating(product.reviews)}
                        </div>            
                        <div className = "product-rating-form">
                            <div className = "product-actions">
                                <button className = "btn" onClick = {toggleReviewFormHandler}>Add review</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className = "divider">
                    </div>
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