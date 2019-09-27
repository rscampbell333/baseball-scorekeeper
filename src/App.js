import React, { useState } from 'react';
import './App.css';
import { Scorecard } from './Scorecard';
import { GameSelector } from './GameSelector';

const App = () => {
  const [gameId, setGameId] = useState();

  const handleGameSelect = (id) => {
    setGameId(id);
  }

  return gameId ? <Scorecard id={gameId}/> : <GameSelector onSelect={handleGameSelect}/>;
}

export default App;