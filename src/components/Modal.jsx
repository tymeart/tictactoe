import React from 'react';
import '../Modal.css';

const Modal = ({ type, msg, handleOptionClick }) => {
  if (type === 'chooseOption') {
    return (
      <div className="Modal">
        <p>Choose your marker: </p>
        <button type="button" onClick={handleOptionClick}>X</button>
        <button type="button" onClick={handleOptionClick}>O</button>
      </div>
    );
  } else if (type === 'relayMessage') {
    return (
      <div className="Modal">
        <p>{ msg }</p>
      </div>
    );
  }
}

export default Modal;