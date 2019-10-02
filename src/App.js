import React, { useState } from 'react';
import './App.css';
import { Scorecard } from './Scorecard';
import { GameSelector } from './GameSelector';

const App = () => {
  const [gameId, setGameId] = useState();
  const [loading, setLoading] = useState(true);

  const handleGameSelect = (id) => {
    setGameId(id);
    setLoading(false);
  }

  const reload = () => setLoading(true);

  return loading ? <GameSelector onSelect={handleGameSelect}/> : <Scorecard gameId={gameId} onReload={reload}/>;
}

export default App;