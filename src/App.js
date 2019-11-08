import React, { useState } from 'react';
import './App.css';
import { Scorecard } from './Scorecard';
import { GameSelector } from './GameSelector';

const App = () => {
  const [gameId, setGameId] = useState('be4b4130-a892-46f9-9372-ac77ec5c2ef8');
  const [loading, setLoading] = useState(false);

  // const [gameId, setGameId] = useState();
  // const [loading, setLoading] = useState(true);

  const handleGameSelect = (id) => {
    setGameId(id);
    setLoading(false);
  }

  const reload = () => setLoading(true);

  return <div>
      { loading ? <GameSelector onSelect={handleGameSelect}/> : <Scorecard gameId={gameId} onReload={reload}/> }
    </div>
}

export default App;