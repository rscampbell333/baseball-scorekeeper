import React from 'react';
import './Controls.css';

export const Controls = ({onSave, onReload}) => {
    return <div className='controls'>
        <button onClick={onSave}>Save</button>
        <button onClick={onReload}>Load</button>
    </div>
}