import React from 'react';
import { ResultWrapper } from './ResultWrapper';
import { PlayerNames } from './PlayerNames';
import { isHit } from './utils/utils';
import './Position.css';

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
            <ResultWrapper inning={i + 1} onChange={handleResultUpdate} result={stats && stats.results ? stats.results[i] : undefined}/>
        </div>
    ));

    const totals = results.reduce((acc, current) => {
        if(current) {
            const { farthestBase, result } = current;

            if(farthestBase === 4) {
                acc.runs++;
            }

            if(result) {
                if(isHit(result.play)) {
                    acc.hits++;
                }

                if(result.play.indexOf('E') === 0) {
                    acc.errors++;
                }
            }
        }

        return acc;
    }, { runs: 0, hits: 0, errors: 0 });
        
    return <div className="position">
        <div className="players left-column">
            <PlayerNames onChange={handlePlayerUpdate} players={stats ? stats.players : undefined}/>
        </div>
        <div className="results">
            {playerComponents}
        </div>
    </div>;
}

