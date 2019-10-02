import React, { useState, useEffect } from 'react';
import { Table } from './base-components';
import './GameSelector.css';

export const GameSelector = ({onSelect}) => {
    const [loading, setLoading] = useState(true);
    const [rows, setRows] = useState();

    useEffect(() => {
        const loadGames = async () => {
            const response = await fetch(`${process.env.REACT_APP_SERVER_HOST}/scorekeeper`)
            const games = await response.json();

            const rows = games.map(game => ({ id: game.id, data: [ game.metadata.teamName, game.metadata.date]}));
            setRows(rows);
            setLoading(false);
        }

        loadGames();
    }, []);

    const handleNewGame = () => {
        if(onSelect) {
            onSelect(null);
        }
    }

    return (
        !loading && (<div className="game-selector">
            <div className="new-game">
                <a href="#" onClick={handleNewGame}>New game</a> or load existing game: 
            </div>
            <Table headers={['Team', 'Date']} rows={rows} onSelect={onSelect}/>
        </div>)
    )
}