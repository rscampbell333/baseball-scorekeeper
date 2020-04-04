import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export const MenuButton = ({label, onClick, loading}) => (
    <div className="menu-button" onClick={onClick}>
        <div className="menu-button-label">
            {label}
        </div>
        { loading && <CircularProgress className="loading-indicator" size={16}/>}
    </div>
)