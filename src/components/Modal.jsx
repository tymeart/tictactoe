import React from 'react';
import '../Modal.css';

const Modal = ({ type, winner, handleOptionClick, handleRestartClick }) => {
  let gameOverMsg;
  switch (winner) {
    case 'human':
      gameOverMsg = 'You won!';
      break;
    case 'computer':
      gameOverMsg = 'Aww, you lost.';
      break;
    case 'tie':
      gameOverMsg = 'It\'s a tie!';
      break;
    default:
      console.log('No game over?');
      break;
  }

  if (type === 'chooseOption') {
    return (
      <div className="Modal">
        <p>Choose your marker: </p>
        <button type="button" className="markerChoice" onClick={handleOptionClick}>X</button>
        <button type="button" className="markerChoice" onClick={handleOptionClick}>O</button>
      </div>
    );
  } else if (type === 'gameOver') {
    return (
      <div className="Modal">
        <p>Game Over</p>
        <p>{ gameOverMsg }</p>
        <button type="button" className="restart" onClick={handleRestartClick}>Restart</button>
      </div>
    );
  }
}

export default Modal;