import React, { useState, useEffect } from 'react';
import { Modal, Tabs, Tab } from './base-components';
import { GameMetadata } from './GameMetadata';
import { InningsGrid } from './InningsGrid';
import { Menu, MenuButton, MenuToggle } from './base-components';

export const Scorecard = ({gameId, onReload}) => {
  const [ id, setId ] = useState(gameId);
  const [ loading, setLoading] = useState(true);
  const [ team, setTeam ] = useState('home');
  const [ metadata, setMetadata ] = useState();
  const [ homeStats, setHomeStats ] = useState();
  const [ awayStats, setAwayStats ] = useState();
  const [ innings, setInnings ] = useState(9);
  const [ modalConfig, setModalConfig ] = useState({show: false});
  const [ isDarkMode, setIsDarkMode ] = useState(false);

  const saveGame = async() => {
    const method = id ? 'put' : 'post';

    const response = await fetch(`${process.env.REACT_APP_SERVER_HOST}/scorekeeper/${id ? id : ''}`, {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ metadata, innings: { home: homeStats, away: awayStats } })
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
  }

  const addInning = () => {
    setInnings(innings + 1);
  }

  useEffect(() => {
    const fetchGame = async () => {
      if(id) {
        const response = await fetch(`${process.env.REACT_APP_SERVER_HOST}/scorekeeper/${id}`);
        const game = await response.json();
    
        setMetadata(game.metadata);
        setHomeStats(game.innings.home);
        setAwayStats(game.innings.away)
        const innings = game.innings && game.innings[0] && game.innings[0].results.length >= 9 ? game.innings[0].results.length : 9;
        setInnings(innings);
      }
      
      setLoading(false);
    }

    fetchGame();
  }, [id]);

  const handleThemeToggle = (event) => {
    console.log(event);
    setIsDarkMode(!isDarkMode);
  }

  const menu = <Menu>
    <MenuButton label="Save" onClick={saveGame}/>
    <MenuButton label="Load" onClick={onReload}/>
    <MenuToggle label="Dark mode" onChange={handleThemeToggle} defaultValue={isDarkMode}/>
  </Menu>;

  return (!loading && <div className={isDarkMode ? 'dark' : 'light'}>
      <GameMetadata initMetadata={metadata} onChange={setMetadata} addInning={addInning} menu={menu}/>
      { team === 'home' ? <InningsGrid innings={innings} stats={homeStats} onChange={setHomeStats}/> : <InningsGrid innings={innings} stats={awayStats} onChange={setAwayStats}/> }
      <Tabs onSelect={setTeam}>
        <Tab label="home" onSelect={setTeam}/>
        <Tab label="away" onSelect={setTeam}/>
      </Tabs>
      { modalConfig.show && <Modal onSubmit={() => setModalConfig({show: false})} text={modalConfig.text} title={modalConfig.title} submitLabel="OK" error={modalConfig.error}/> }
    </div>
  )
}