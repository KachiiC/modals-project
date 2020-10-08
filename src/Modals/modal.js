import React from 'react'
// CSS
import './modal.css'


const Modal = (props) => {

    const { closeModal } = props;

  
    return (
        <div className="overlay">
          <div className="content">
            <div className="close-button-container" onClick={closeModal}>
              <span className="close-button">X</span>
            </div>
            {props.children}
          </div>
        </div>
    );
};
  
  
  export default Modal;