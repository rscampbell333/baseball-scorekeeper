import React, { useState, useEffect } from 'react';
import { Controls } from './base-components';
import { GameMetadata } from './GameMetadata';
import { InningsGrid } from './InningsGrid';

export const Scorecard = ({id}) => {
  const [ loading, setLoading] = useState(true);
  const [ metadata, setMetadata ] = useState();
  const [ innings, setInnings ] = useState();

  const saveGame = async() => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_HOST}/scorekeeper/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ metadata, innings })
    });
  }

  useEffect(() => {
    const fetchGame = async () => {
      const response = await fetch(`${process.env.REACT_APP_SERVER_HOST}/scorekeeper/${id}`);
      const game = await response.json();
  
      setMetadata(game.metadata);
      setInnings(game.innings);
      setLoading(false);
    }

    fetchGame();
  }, [id]);

  return (!loading && <>
      <Controls onSave={saveGame}/>
      <GameMetadata initMetadata={metadata} onChange={setMetadata}/>
      <InningsGrid initStats={innings} onChange={setInnings}/>
    </>
  )
}