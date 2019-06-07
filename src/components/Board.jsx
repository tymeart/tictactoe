import React, { Component } from 'react';
import Square from './Square';
import '../Board.css';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: [
        [],
        [],
        []
      ]
    };
  }

  handleSquareClick = (e) => {
    if (this.props.yourTurn) {
      const row = e.target.dataset.row;
      const col = e.target.dataset.col;
      let newStatus = this.state.status;
      newStatus[row][col] = this.props.yourMarker;
      this.setState({ status: newStatus });
      this.props.changeTurns();
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Square 
            row="0" 
            col="0" 
            marker={this.state.status[0][0]} 
            handleSquareClick={this.handleSquareClick} 
          />
          <Square 
            row="0" 
            col="1" 
            marker={this.state.status[0][1]} 
            handleSquareClick={this.handleSquareClick}             
          />
          <Square 
            row="0" 
            col="2" 
            marker={this.state.status[0][2]} 
            handleSquareClick={this.handleSquareClick}           
          />
        </div>
        <div className="row">
          <Square 
            row="1" 
            col="0" 
            marker={this.state.status[1][0]} 
            handleSquareClick={this.handleSquareClick} 
          />
          <Square 
            row="1" 
            col="1" 
            marker={this.state.status[1][1]} 
            handleSquareClick={this.handleSquareClick} 
          />
          <Square 
            row="1" 
            col="2" 
            marker={this.state.status[1][2]} 
            handleSquareClick={this.handleSquareClick} 
          />
        </div>
        <div className="row">
          <Square 
            row="2" 
            col="0" 
            marker={this.state.status[2][0]} 
            handleSquareClick={this.handleSquareClick}             
          />
          <Square 
            row="2" 
            col="1" 
            marker={this.state.status[2][1]} 
            handleSquareClick={this.handleSquareClick} 
          />
          <Square 
            row="2" 
            col="2" 
            marker={this.state.status[2][2]} 
            handleSquareClick={this.handleSquareClick} 
          />
        </div>
      </div>
    );
  }
}

export default Board;