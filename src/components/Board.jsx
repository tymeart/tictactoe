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
  isGameOverFor(marker) {
    let playerChecked = this.props.humanMarker === marker ? 'human' : 'computer';

    if (
        (this.state.spaces[0] === marker && this.state.spaces[1] === marker && this.state.spaces[2] === marker) ||
        (this.state.spaces[3] === marker && this.state.spaces[4] === marker && this.state.spaces[5] === marker) ||
        (this.state.spaces[6] === marker && this.state.spaces[7] === marker && this.state.spaces[8] === marker) ||
        (this.state.spaces[0] === marker && this.state.spaces[3] === marker && this.state.spaces[6] === marker) ||
        (this.state.spaces[1] === marker && this.state.spaces[4] === marker && this.state.spaces[7] === marker) ||
        (this.state.spaces[2] === marker && this.state.spaces[5] === marker && this.state.spaces[8] === marker) ||
        (this.state.spaces[0] === marker && this.state.spaces[4] === marker && this.state.spaces[8] === marker) ||
        (this.state.spaces[2] === marker && this.state.spaces[4] === marker && this.state.spaces[6] === marker) 
    ) {
      // a win or tie
      if (playerChecked === 'human') {
        console.log('You won!');
        return true;
      } else if (playerChecked === 'computer') {
        console.log('Aww, you lost.');
        return true;
      } else if (this.getOpenSpaces().length === 0) {
        console.log('It\'s a tie!');
        return true;
      }
    } else {
      // no win, no tie yet
      return false;
    }
  }

  handleSquareClick = (e) => {
    if (this.props.playerTurn === 'human') {
      // update status to reflect marked square
      const position = e.target.dataset.position;
      let newStatus = this.state.spaces;
      // only mark the square if it's empty
      if (newStatus[position] === '') {
        newStatus[position] = this.props.humanMarker;
        this.setState({ spaces: newStatus });
        // check for a win or a tie
        // if no win or tie, continue game by changing turns
        if (this.isGameOverFor(this.props.humanMarker)) {
          console.log('GAME OVER');
        } else {
          this.props.changeTurns();          
        }
      }
    }
  }

  componentDidUpdate() {
    // computer's move
    if (this.props.playerTurn === 'computer') {
      const numOpenSpaces = this.getOpenSpaces().length;
      const randomPosition = Math.floor(Math.random * Math.floor(numOpenSpaces));
      let newStatus = this.state.spaces;
      newStatus[randomPosition] = this.props.compMarker;
      this.setState({ spaces: newStatus });
      if (this.isGameOverFor(this.props.compMarker)) {
        console.log('GAME OVER');
      } else {
        this.props.changeTurns();
      }
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