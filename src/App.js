import React, { useState, useEffect } from 'react';
import './App.css';
import { BaseballField } from './BaseballField';
import { InningsGrid } from './InningsGrid';
import { GameMetadata } from './GameMetadata';

export const App = () => {
  const [ metadata, setMetadata ] = useState();
  const [ innings, setInnings ] = useState();

  useEffect(() => {
      
  });

  return <>
      <GameMetadata onChange={ setMetadata }/>
      <InningsGrid onChange={ setInnings }/>
    </>
}

export default App;
