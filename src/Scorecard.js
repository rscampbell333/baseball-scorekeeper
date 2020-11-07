import React, { useState, useEffect, useContext } from 'react';
import { TextModal, Tabs } from './base-components';
import { GameMetadata } from './GameMetadata';
import { InningsGrid } from './InningsGrid';
import { Menu, MenuButton, MenuToggle } from './base-components';
import { ThemeContext } from './base-components/ThemeContext';

export const Scorecard = ({gameId, onReload}) => {
  const [ id, setId ] = useState(gameId);
  const [ loading, setLoading] = useState(true);
  const [ team, setTeam ] = useState('home');
  const [ homeTeam, setHomeTeam ] = useState();
  const [ awayTeam, setAwayTeam ] = useState();
  const [ date, setDate ] = useState();
  const [ homeStats, setHomeStats ] = useState();
  const [ awayStats, setAwayStats ] = useState();
  const [ innings, setInnings ] = useState(9);
  const [ modalConfig, setModalConfig ] = useState({show: false});
  const [ isDarkMode, setIsDarkMode ] = useState(false);
  const [ savingGame, setSavingGame ] = useState(false);

  const { theme, setTheme } = useContext(ThemeContext);

  const saveGame = async() => {
    setSavingGame(true);
    const method = id ? 'put' : 'post';

    const response = await fetch(`${process.env.REACT_APP_SERVER_HOST}/scorekeeper/${id ? id : ''}`, {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ metadata: { date, homeTeam, awayTeam }, innings: { home: homeStats, away: awayStats } })
    });

    if(!id) {
      console.log(response.headers);
      const location = response.headers.get('location');
      const newId = location.substring(location.lastIndexOf('/') + 1);
      setId(newId);
    }

    if(response.ok) {
      setModalConfig({show: true, title: 'Game saved successfully!' });
    } else {
      setModalConfig({show: true, title: 'Error saving game', error: true });
    }

    setSavingGame(false);
  }

  const addInning = () => {
    setInnings(innings + 1);
  }

  useEffect(() => {
    const fetchGame = async () => {
      if(id) {
        const response = await fetch(`${process.env.REACT_APP_SERVER_HOST}/scorekeeper/${id}`);
        const game = await response.json();
    
        setDate(game.metadata.date);
        setHomeTeam(game.metadata.homeTeam);
        setAwayTeam(game.metadata.awayTeam);
        setHomeStats(game.innings.home);
        setAwayStats(game.innings.away)

        let innings = game.innings.home.reduce((max, current) => Math.max(max, current.results.length), 0);
        innings = game.innings.away.reduce((max, current) => Math.max(max, current.results.length), innings);

        setInnings(innings > 9 ? innings : 9);
      }
      
      setLoading(false);
    }

    fetchGame();
  }, [id]);

  const handleThemeToggle = (event) => {
    console.log(event);
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const menu = <Menu>
    <MenuButton label="Save" onClick={saveGame} loading={savingGame}/>
    <MenuButton label="Load" onClick={onReload}/>
    <MenuToggle label="Dark mode" onChange={handleThemeToggle} defaultValue={isDarkMode}/>
  </Menu>;

  return (!loading && <div className={theme} id="top">
      { team === 'home' ? <GameMetadata team={homeTeam} onTeamChange={setHomeTeam} date={date} onDateChange={setDate} addInning={addInning} menu={menu}/> : <GameMetadata team={awayTeam} onTeamChange={setAwayTeam} date={date} onDateChange={setDate} addInning={addInning} menu={menu}/> }
      { team === 'home' ? <InningsGrid innings={innings} stats={homeStats} onChange={setHomeStats}/> : <InningsGrid innings={innings} stats={awayStats} onChange={setAwayStats}/> }
      <Tabs onSelect={setTeam} labels={['home', 'away']} selectedLabel={team}/>
      { modalConfig.show && <TextModal onSubmit={() => setModalConfig({show: false})} 
                                       showSubmitButton={true} 
                                       text={modalConfig.text} 
                                       title={modalConfig.title} 
                                       submitLabel="OK" 
                                       error={modalConfig.error}/> 
      }
    </div>
  )
}