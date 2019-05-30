import React, { Component } from 'react';
import Square from './Square';
import '../Board.css';

class Board extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="row">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    );
  }
}

export default Board;