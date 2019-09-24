import React, { useState, useEffect } from 'react';
import { Table } from './base-components';

export const GameSelector = () => {
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

    const handleSelect = (id) => {
        console.log(id)
    }

    return (
        !loading && <Table headers={['Team', 'Date']} rows={rows} onSelect={handleSelect}/>
    )
}