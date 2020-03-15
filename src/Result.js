import React from 'react';
import { EditableText } from './base-components';
import { BaseballField } from './BaseballField';
import './Result.css';

export const Result = React.memo(({inning, result, onChange, isModal}) => {

    const farthestBase = (result && result.farthestBase) || 0;
    const count = (result && result.count) || { balls: 0, strikes: 0};
    const play = (result && result.result) || '';

    const handleBaseClick = base => {
        const newFarthestBase = base  <= farthestBase ? base - 1 : base;
        onChange({farthestBase: newFarthestBase, count, result: play, inning});
    }

    const handleCountChange = newCount => onChange({ count: newCount, farthestBase, result: play, inning });

    const handleResultChange = newResult => onChange({ count, farthestBase, result: newResult, inning });
    
    return (
        <div className={`wrapper ${isModal ? 'large' : ''}`}>
            <div className="field">
                <BaseballField onBaseClick={handleBaseClick} onCountChange={handleCountChange} count={count} farthestBase={farthestBase}/>
            </div>
            <div className="result" >
                <EditableText onChange={handleResultChange} placeholder="result" value={play}/>
            </div>
        </div>
    )
});