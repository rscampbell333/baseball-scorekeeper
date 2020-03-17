import React from 'react';
import { PitchBox } from './PitchBox';
import './PitchCount.css';

export const PitchCount = React.memo(({onChange, balls = 0, strikes = 0}) => {

    const x = 160;
    const y = 140;

    const updateCount = (type, reached) => {
        if(type === 'ball') {
            const newBalls = reached ? balls + 1 : balls - 1;
            onChange({ strikes, balls: newBalls })
        } else {
            const newStrikes = reached ? strikes + 1 : strikes - 1;
            onChange({ strikes: newStrikes, balls });
        }
    };

    return <g className="pitchCount" transform={`translate(${x}, ${y})`}>
        <g className="balls flexbox">
            <PitchBox type="ball" reached={1 <= balls} updateCount={updateCount} x={0} y={0}/>
            <PitchBox type="ball" reached={2 <= balls} updateCount={updateCount} x={20} y={0}/>
            <PitchBox type="ball" reached={3 <= balls} updateCount={updateCount} x={40} y={0}/>
        </g>
        <g className="strikes flexbox">
            <PitchBox type="strike" reached={1 <= strikes} updateCount={updateCount} x={0} y={20}/>
            <PitchBox type="strike" reached={2 <= strikes} updateCount={updateCount} x={20} y={20}/>
        </g>
    </g>
});