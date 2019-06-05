import React from 'react';
import '../Turns.css';

const Turns = ({ yourMarker, compMarker }) => {
  return (
    <div className="Turns">
      <div>Your turn! { yourMarker }</div>
      <div>Computer's turn! { compMarker }</div>
    </div>
  );
}

export default Turns;