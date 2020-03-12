import React from 'react';
import './PitchCount.css';

export const PitchBox = ({type, reached, updateCount, x, y}) => {
    
    const toggleReached = (event) => updateCount(type, !reached);

    const className = `pitchBox ${reached ? 'reached' : ''}`
    return <rect width="16" height="16" className={className} onClick={toggleReached} x={x} y={y}/>;
}