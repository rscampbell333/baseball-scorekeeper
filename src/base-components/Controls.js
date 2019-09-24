import React from 'react';
import './Controls.css';

export const Controls = ({onSave, onClear}) => {
    return <div className='controls'>
        <button onClick={onSave}>Save</button>
        <button onClick={onClear}>Clear</button>
    </div>
}