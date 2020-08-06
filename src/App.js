import React, { useState } from 'react';
import './App.css';
import { Scorecard } from './Scorecard';
import { GameSelector } from './GameSelector';
import { ThemeContext } from './base-components/ThemeContext';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const App = () => {
  const [gameId, setGameId] = useState();
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');

  const materialTheme = createMuiTheme({
    palette: {
      type: theme
    },
    typography: {
      fontFamily: [
        "oxygen", 
        "sans-serif"
      ]
    }
  });

  const handleGameSelect = (id) => {
    setGameId(id);
    setLoading(false);
  }

  const reload = () => setLoading(true);

  return <div className="common">
      <ThemeContext.Provider value={{theme, setTheme}}>
        <ThemeProvider theme={materialTheme}>
        { loading ? <GameSelector onSelect={handleGameSelect}/> : <Scorecard gameId={gameId} onReload={reload}/> }
      </ThemeProvider>
    </ThemeContext.Provider>
  </div>
}

export default App;