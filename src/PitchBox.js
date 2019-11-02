import React from 'react';
import './PitchCount.css';

export const PitchBox = ({reached, updateCount}) => {
    
    const toggleReached = (event) => updateCount(!reached);

    const className = `pitchBox ${reached ? 'reached' : ''}`
    return <div className={className} onClick={toggleReached}></div>;
}