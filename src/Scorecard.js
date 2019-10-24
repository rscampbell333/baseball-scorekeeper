import React, { useState, useEffect } from 'react';
import { Controls, Modal } from './base-components';
import { GameMetadata } from './GameMetadata';
import { InningsGrid } from './InningsGrid';

export const Scorecard = ({gameId, onReload}) => {
  const [ id, setId ] = useState(gameId);
  const [ loading, setLoading] = useState(true);
  const [ metadata, setMetadata ] = useState();
  const [ stats, setStats ] = useState();
  const [ innings, setInnings ] = useState(9);
  const [ modalConfig, setModalConfig ] = useState({show: false});

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

  return (!loading && <>
      <Controls onSave={saveGame} onReload={onReload}/>
      <GameMetadata initMetadata={metadata} onChange={setMetadata} addInning={addInning}/>
      <InningsGrid innings={innings} initStats={stats} onChange={setStats}/>
      { modalConfig.show && <Modal onSubmit={() => setModalConfig({show: false})} text={modalConfig.text} title={modalConfig.title} submitLabel="OK" error={modalConfig.error}/> }
    </>
  )
}