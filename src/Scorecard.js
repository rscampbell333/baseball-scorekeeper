import React, { useState, useEffect } from 'react';
import { Modal } from './base-components';
import { GameMetadata } from './GameMetadata';
import { InningsGrid } from './InningsGrid';
import { Menu, MenuButton, MenuToggle } from './base-components';

export const Scorecard = ({gameId, onReload}) => {
  const [ id, setId ] = useState(gameId);
  const [ loading, setLoading] = useState(true);
  const [ metadata, setMetadata ] = useState();
  const [ stats, setStats ] = useState();
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
      body: JSON.stringify({ metadata, innings: stats })
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
        setStats(game.innings);
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
      <InningsGrid innings={innings} stats={stats} onChange={setStats}/>
      { modalConfig.show && <Modal onSubmit={() => setModalConfig({show: false})} text={modalConfig.text} title={modalConfig.title} submitLabel="OK" error={modalConfig.error}/> }
    </div>
  )
}