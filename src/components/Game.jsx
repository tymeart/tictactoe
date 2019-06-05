import React, { Component } from 'react';
import Modal from './Modal';
import Board from './Board';
import Turns from './Turns';
import '../Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      atStart: true,
      yourTurn: false,
      compTurn: false,
      yourMarker: null,
      compMarker: null
    };
  }
  
  handleOptionClick = (e) => {
    let compMarker = e.target.innerHTML === 'X' ? 'O' : 'X';

    this.setState({
      atStart: false, 
      yourMarker: e.target.innerHTML,
      compMarker: compMarker
    });
  }

  render() {
    return (
      <div className="Game">
        <h1>Tic Tac Toe</h1>
        <main>
          {this.state.atStart && 
            <Modal 
              type="chooseOption" 
              handleOptionClick={this.handleOptionClick} 
            /> 
          }

          <Board />
          <Turns 
            yourMarker={this.state.yourMarker}
            compMarker={this.state.compMarker}
          />
        </main>
      </div>
    );
  }
}

export default Game;
