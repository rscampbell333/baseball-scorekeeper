import React, { useState, useEffect } from 'react';
import { Table } from './base-components';
import './GameSelector.css';

export const GameSelector = ({ onSelect }) => {
    const [loading, setLoading] = useState(true);
    const [rows, setRows] = useState();

    const loadGames = async () => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_HOST}/scorekeeper`)
        const games = await response.json();

        const rows = games.map(game => ({ id: game.id, data: [ game.metadata.teamName, game.metadata.date]}));
        setRows(rows);
        setLoading(false);
    }

    useEffect(() => {
        loadGames();
    }, []);

    const handleNewGame = () => {
        if(onSelect) {
            onSelect(null);
        }
    }

    const handleDelete = async (id) => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_HOST}/scorekeeper/${id}`, {
            method: 'delete'
        });
        loadGames();
    }

    return (
        !loading && (<div className="game-selector">
            <div className="new-game">
                <a href="#" onClick={handleNewGame}>New game</a> or load existing game: 
            </div>
            <Table headers={['Team', 'Date']} rows={rows} onSelect={onSelect} onDelete={handleDelete}/>
        </div>)
    )
}