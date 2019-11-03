import React from 'react';
import './Header.css';

export const Header = ({innings = 9}) => {
    return <div className="header">
        <div className="left-column">
            Players
        </div>
        <div className="innings">
            { Array.from({length: innings}, (e, i) => <div key={i.toString()} className="inning inning-header">{i + 1}</div>) }
            <div className="end inning"></div>
        </div>
    </div>
}