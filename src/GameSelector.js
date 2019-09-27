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

    return (
        !loading && <div className="game-selector"><Table headers={['Team', 'Date']} rows={rows} onSelect={onSelect}/></div>
    )
}