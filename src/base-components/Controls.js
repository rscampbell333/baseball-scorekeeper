import React from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import './Controls.css';

export const Controls = ({onSave, onReload, darkMode, onThemeToggle}) => {
    return <div className="controls">
        <div className="theme">
            <Toggle id="theme-toggle" 
                    className="toggle" 
                    defaultChecked={darkMode} 
                    onChange={onThemeToggle}
                    icons={{checked: null, unchecked: null}} />
            <label htmlFor="theme-toggle">Dark mode</label>
        </div>
        <div className="buttons">
            <button onClick={onSave}>Save</button>
            <button onClick={onReload}>Load</button>
        </div>
    </div>
}