import React from 'react';
import './Controls.css';

export const Controls = ({onSave, onReload, darkMode, onThemeToggle}) => {
    return <div className="controls">
        <div className="theme">
            <input type="checkbox" name="theme" onChange={onThemeToggle} checked={darkMode}></input>
            <label htmlFor="theme">Dark mode</label>
        </div>
        <div className="buttons">
            <button onClick={onSave}>Save</button>
            <button onClick={onReload}>Load</button>
        </div>
    </div>
}