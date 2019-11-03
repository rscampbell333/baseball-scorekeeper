import React from 'react';
import { Result } from './Result';
import './Position.css';
import { PlayerNames } from './PlayerNames';

export const Position = ({stats, onUpdate, number, innings = 9}) => {

    const { players, results = []} = stats;

    const handleResultUpdate = (stats) => {
        const newResults = [...results];
        newResults[stats.inning - 1] = stats;
        onUpdate && onUpdate({ position: number, results: newResults, players});
    }

    const handlePlayerUpdate = (newPlayers) => {
        onUpdate && onUpdate({ position: number, results, players: newPlayers });
    }

    const playerComponents = Array.from({length: innings}, (e, i) => (
        <div key={`${number}-${i}`} className="inning">
            <Result inning={i + 1} onChange={handleResultUpdate} result={stats && stats.results ? stats.results[i] : undefined}/>
        </div>
    ));
        
    return <div className="position">
        <div className="players left-column">
            <PlayerNames onChange={handlePlayerUpdate} players={stats ? stats.players : undefined}/>
        </div>
        <div className="results">
            {playerComponents}
        </div>
    </div>;
}

