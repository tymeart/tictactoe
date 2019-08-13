import React, { Component } from 'react';
import Square from './Square';
import '../Board.css';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spaces: ['', '', '', '', '', '', '', '', '']
    };
  }

  getOpenSpaces() {
    let openSpaces = [];

    for (let i = 0; i < this.state.spaces.length; i++) {
      if (this.state.spaces[i] === '') { openSpaces.push(i); }
    } 

    return openSpaces;
  }

  // pass in either 'X' or 'O'
  checkWin(marker) {
    let playerChecked = this.props.humanMarker === marker ? 'human' : 'computer';

    if (
        this.state.spaces[0] === marker && this.state.spaces[1] === marker && this.state.spaces[2] === marker ||
        this.state.spaces[3] === marker && this.state.spaces[4] === marker && this.state.spaces[5] === marker ||
        this.state.spaces[6] === marker && this.state.spaces[7] === marker && this.state.spaces[8] === marker ||
        this.state.spaces[0] === marker && this.state.spaces[3] === marker && this.state.spaces[6] === marker ||
        this.state.spaces[1] === marker && this.state.spaces[4] === marker && this.state.spaces[7] === marker ||
        this.state.spaces[2] === marker && this.state.spaces[5] === marker && this.state.spaces[8] === marker ||
        this.state.spaces[0] === marker && this.state.spaces[4] === marker && this.state.spaces[8] === marker ||
        this.state.spaces[2] === marker && this.state.spaces[4] === marker && this.state.spaces[6] === marker 
    ) {
      if (playerChecked === 'human') {
        console.log('You won!');
      } else {
        console.log('Aww, you lost.');
      }
    }
      
    if (this.getOpenSpaces().length === 0) {
      console.log('It\'s a tie!');
    }
  }

  handleSquareClick = (e) => {
    if (this.props.playerTurn === 'human') {
      // update status to reflect marked square
      const position = e.target.dataset.position;
      let newStatus = this.state.spaces;
      newStatus[position] = this.props.humanMarker;
      this.setState({ spaces: newStatus });
      this.props.changeTurns();
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Square 
            position="0" 
            marker={this.state.spaces[0]} 
            handleSquareClick={this.handleSquareClick} 
          />
          <Square 
            position="1"
            marker={this.state.spaces[1]} 
            handleSquareClick={this.handleSquareClick}             
          />
          <Square 
            position="2"
            marker={this.state.spaces[2]} 
            handleSquareClick={this.handleSquareClick}           
          />
        </div>
        <div className="row">
          <Square 
            position="3"
            marker={this.state.spaces[3]} 
            handleSquareClick={this.handleSquareClick} 
          />
          <Square 
            position="4"
            marker={this.state.spaces[4]} 
            handleSquareClick={this.handleSquareClick} 
          />
          <Square 
            position="5" 
            marker={this.state.spaces[5]} 
            handleSquareClick={this.handleSquareClick} 
          />
        </div>
        <div className="row">
          <Square 
            position="6" 
            marker={this.state.spaces[6]} 
            handleSquareClick={this.handleSquareClick}             
          />
          <Square 
            position="7"
            marker={this.state.spaces[7]} 
            handleSquareClick={this.handleSquareClick} 
          />
          <Square 
            position="8"
            marker={this.state.spaces[8]} 
            handleSquareClick={this.handleSquareClick} 
          />
        </div>
      </div>
    );
  }
}

export default Board;