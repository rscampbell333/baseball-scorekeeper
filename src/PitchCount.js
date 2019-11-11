import React from 'react';
import { PitchBox } from './PitchBox';
import './PitchCount.css';

export const PitchCount = React.memo(({onChange, balls = 0, strikes = 0}) => {

    const generatePitches = (count, total, type) => {
        const pitches = Array.from({length: total}).map((_, i) => <PitchBox key={i} type={type} reached={i + 1 <= count} updateCount={updateCount}/>);
        return pitches;
    }

    const updateCount = (type, reached) => {
        if(type === 'ball') {
            const newBalls = reached ? balls + 1 : balls - 1;
            onChange({ strikes, balls: newBalls })
        } else {
            const newStrikes = reached ? strikes + 1 : strikes - 1;
            onChange({ strikes: newStrikes, balls });
        }
    };

    return <div className="pitchCount">
        <div className="balls flexbox">
            {generatePitches(balls, 3, 'ball')}
        </div>
        <div className="strikes flexbox">
            {generatePitches(strikes, 2, 'strike')}
        </div>
    </div>
});