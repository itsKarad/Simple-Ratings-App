import React, {useState} from 'react';
import Modal from './Form/Modal';
import './ProductReviewSection.css';
import Review from './Review';
import Reviews from './Reviews';

const ProductReviewSection = (props) => {
    const DUMMY_REVIEW = {
        rating: 4,
        text: "Very good!",
    };
    const DUMMY_PRODUCT = {
        title: "The Minimalist Entrepreneur",
        reviews: [
            {
                rating: 4,
                text: "Very good",
            },
            {
                rating: 1,
                text: "Meh!",
            },
            {
                rating: 4,
                text: "Wow!",
            }
        ],
    };
    const calculateAverageRating = (reviews) => {
        let sumOfRating = 0;
        let numberOfReviews = 0;
        for(let i = 0; i < reviews.length; i += 1){
            sumOfRating += reviews[i].rating;
            numberOfReviews += 1;
        }
        let avgRating = sumOfRating / numberOfReviews;
        return avgRating;
    };
    const [showReviewForm, setShowReviewForm] = useState(false);
    const toggleReviewFormHandler = () => {
        const previousVal = showReviewForm;
        setShowReviewForm(!previousVal);
    };
    const submitFormHandler = (review) => {
        console.log(review);
        DUMMY_PRODUCT.reviews.push(review);
        toggleReviewFormHandler();
    }
    return (
        <React.Fragment>
            <Modal show = {showReviewForm} onSubmit = {submitFormHandler} onCancel = {toggleReviewFormHandler}></Modal>
            <div className="product-item">
                <div className = "product-info">
                    <h1 className = "product-title">{DUMMY_PRODUCT.title}</h1>
                </div>
                <div className = "product-ratings">
                    <div className = "product-rating">
                        {calculateAverageRating(DUMMY_PRODUCT.reviews)}
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
                    <Reviews reviews = {DUMMY_PRODUCT.reviews}></Reviews>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ProductReviewSection;