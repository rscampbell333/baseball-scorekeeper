import React from 'react';

export const MenuButton = ({label, onClick}) => (
    <div className="menu-button" onClick={onClick}>
        {label}
    </div>
)