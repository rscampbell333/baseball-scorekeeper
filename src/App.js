import React, { Component } from 'react';
import './App.css';
import { BaseballField } from './BaseballField';
import { InningsGrid } from './InningsGrid';
import { GameMetadata } from './GameMetadata';

class App extends Component {
  //render = () => <BaseballField/>
  render = () => <>
      <GameMetadata/>
      <InningsGrid/>
    </>
}

export default App;
