import React from 'react';
import './Controls.css';

export const Controls = ({onSave, onReload}) => {
    return <div className='controls'>
        <div className='buttons'>
            <button onClick={onSave}>Save</button>
            <button onClick={onReload}>Load</button>
        </div>
    </div>
}