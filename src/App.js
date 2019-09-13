import React, { useState, useEffect } from 'react';
import './App.css';
import { BaseballField } from './BaseballField';
import { InningsGrid } from './InningsGrid';
import { GameMetadata } from './GameMetadata';

export const App = () => {
  const { metadata: initMetadata, innings: initInnings } = JSON.parse(localStorage.getItem('game')) || {};

  const [ metadata, setMetadata ] = useState(initMetadata);
  const [ innings, setInnings ] = useState(initInnings);

  useEffect(() => {
      localStorage.setItem('game', JSON.stringify({ metadata, innings}));
  });

  return <>
      <GameMetadata initMetadata={initMetadata} onChange={ setMetadata }/>
      <InningsGrid initStats={initInnings} onChange={ setInnings }/>
    </>
}

export default App;
