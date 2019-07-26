import React, { Component } from 'react';
import './App.css';
import { BaseballField } from './BaseballField';
import { InningsGrid } from './InningsGrid';

class App extends Component {
  //render = () => <BaseballField/>
  render = () => <InningsGrid/>
}

export default App;
