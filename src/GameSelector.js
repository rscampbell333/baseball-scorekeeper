import React, { useState, useEffect } from 'react';
import { Table, Modal } from './base-components';
import './GameSelector.css';

export const GameSelector = ({ onSelect }) => {
    const [loading, setLoading] = useState(true);
    const [rows, setRows] = useState();
    const [showModal, setShowModal] = useState(false);
    const [gameId, setGameId] = useState();

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
        setGameId(id);
        setShowModal(true);
    }

    const deleteGame = async () => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_HOST}/scorekeeper/${gameId}`, {
            method: 'delete'
        });
        loadGames();
        setShowModal(false);
    }

    return (
        !loading && (<div className="game-selector">
            <div className="new-game">
                <a href="#" onClick={handleNewGame}>New game</a> or load existing game: 
            </div>
            <Table headers={['Team', 'Date']} rows={rows} onSelect={onSelect} onDelete={handleDelete}/>
            {showModal && <Modal onCancel={() => setShowModal(false)} 
                   onSubmit={deleteGame} 
                   title="Delete Game" 
                   text="Do you really want to delete the game?"/>
            }
        </div>)
    )
}