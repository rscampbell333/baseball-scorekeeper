import React from 'react';
import './PitchCount.css';

export const PitchBox = ({type, reached, updateCount}) => {
    
    const toggleReached = (event) => updateCount(type, !reached);

    const className = `pitchBox ${reached ? 'reached' : ''}`
    return <div className={className} onClick={toggleReached}></div>;
}