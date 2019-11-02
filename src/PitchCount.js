import React, { useState, useEffect } from 'react';
import { PitchBox } from './PitchBox';
import './PitchCount.css';

export const PitchCount = ({onChange, ...props}) => {

    const [balls, setBalls] = useState([false, false, false].fill(true, 0, props.balls || 0));
    const [strikes, setStrikes] = useState([false, false].fill(true, 0, props.strikes || 0));

    const generatePitches = (pitches, setPitches) => {
        return pitches.map((reached, i) => <PitchBox key={i} updateCount={updateCount(i, pitches, setPitches)} reached={reached}/>);
    }

    const updateCount = (i, pitches, setPitches) => {
        return (reached) => {
            const newPitches = [...pitches];
            newPitches[i] = reached;
            setPitches(newPitches);
        }
    } 

    useEffect(() => {
        const count = {
            balls: balls.filter(v => v).length,
            strikes: strikes.filter(v => v).length
        };

        onChange && onChange(count);
    }, [balls, strikes, onChange]);

    return <div className="pitchCount">
        <div className="balls flexbox">
            {generatePitches(balls, setBalls)}
        </div>
        <div className="strikes flexbox">
            {generatePitches(strikes, setStrikes)}
        </div>
    </div>
}