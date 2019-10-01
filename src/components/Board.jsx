import React from 'react';
import Square from './Square';
import '../Board.css';

function Board(props) {
  return (
    <div className="container">
      <div className="row">
        <Square 
          position="0" 
          marker={props.spaces[0]} 
          handleSquareClick={props.handleSquareClick} 
        />
        <Square 
          position="1"
          marker={props.spaces[1]} 
          handleSquareClick={props.handleSquareClick}             
        />
        <Square 
          position="2"
          marker={props.spaces[2]} 
          handleSquareClick={props.handleSquareClick}           
        />
      </div>
      <div className="row">
        <Square 
          position="3"
          marker={props.spaces[3]} 
          handleSquareClick={props.handleSquareClick} 
        />
        <Square 
          position="4"
          marker={props.spaces[4]} 
          handleSquareClick={props.handleSquareClick} 
        />
        <Square 
          position="5" 
          marker={props.spaces[5]} 
          handleSquareClick={props.handleSquareClick} 
        />
      </div>
      <div className="row">
        <Square 
          position="6" 
          marker={props.spaces[6]} 
          handleSquareClick={props.handleSquareClick}             
        />
        <Square 
          position="7"
          marker={props.spaces[7]} 
          handleSquareClick={props.handleSquareClick} 
        />
        <Square 
          position="8"
          marker={props.spaces[8]} 
          handleSquareClick={props.handleSquareClick} 
        />
      </div>
    </div>
    );
}

export default Board;