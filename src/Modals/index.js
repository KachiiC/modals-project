import React from 'react'

const Modal = (props) => {
    const { closeModal } = props;
  
    const closeicon = () => (
      <button name="times" onClick={closeModal}>X</ button>
    );
  
    return (
      <div className="overlay">
        <div className="content">
          { closeicon() }
          {props.children}
        </div>
      </div>
    );
  };
  
  
  export default Modal;