import React from 'react';
import '../Turns.css';

const Turns = ({ humanTurn, humanMarker, compMarker }) => {
  return (
    <div className="Turns">
      { humanTurn ? 'Your turn' : 'Computer\'s turn' }
    </div>
  );
}

export default Turns;