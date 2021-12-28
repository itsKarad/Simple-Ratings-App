import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import ReviewForm from './ReviewForm';


const Backdrop = (props) => {
    return (
        <div className = "backdrop" onClick={props.onConfirm}>

        </div>
    );
};

const ModalOverlay = (props) => {
    return (
        <div className = "modal">
            <ReviewForm></ReviewForm>
        </div>
        
    );
};

const Modal = (props) => {
    return (
      <React.Fragment>
        {
            props.show &&
            ReactDOM.createPortal(
                <Backdrop></Backdrop>,
                document.getElementById("backdrop-root")
            )
        }
        {
            props.show &&
            ReactDOM.createPortal(
                <ModalOverlay></ModalOverlay>,
                document.getElementById("overlay-root")
            )
        }
      </React.Fragment>
    );
};

export default Modal;