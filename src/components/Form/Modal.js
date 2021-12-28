import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import ReviewForm from './ReviewForm';


const Backdrop = (props) => {
    return (
        <div className = "backdrop" onClick={props.onCancel}>

        </div>
    );
};

const ModalOverlay = (props) => {
    return (
        <div className = "modal">
            <ReviewForm onSubmit = {props.onSubmit}></ReviewForm>
        </div>
        
    );
};

const Modal = (props) => {
    return (
      <React.Fragment>
        {
            props.show &&
            ReactDOM.createPortal(
                <Backdrop onCancel = {props.onCancel}></Backdrop>,
                document.getElementById("backdrop-root")
            )
        }
        {
            props.show &&
            ReactDOM.createPortal(
                <ModalOverlay onSubmit = {props.onSubmit}></ModalOverlay>,
                document.getElementById("overlay-root")
            )
        }
      </React.Fragment>
    );
};

export default Modal;