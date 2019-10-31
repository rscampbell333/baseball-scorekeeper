import React from 'react';
import Toggle from 'react-toggle';

export const MenuToggle = ({label, defaultValue, onChange}) => (
    <div className="menu-toggle">
        <label htmlFor="toggle">{label}</label>
        <Toggle id="toggle" 
            className="toggle" 
            defaultChecked={defaultValue} 
            onChange={onChange}
            icons={{checked: null, unchecked: null}} />
    </div>
);