import React from 'react';
import './App.css';
import { GameGrid } from './GameGrid';
import { PlayerToggler } from './PlayerToggler';
import { TotalWins } from './TotalWins';

function App() {
  return (
    <div className="App">
      <h1>TIC - TAC - TOE</h1>
      <PlayerToggler />
      <GameGrid />
      <TotalWins />
    </div>
  );
}

export default App;
