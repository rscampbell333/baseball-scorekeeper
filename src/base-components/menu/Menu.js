import React, { useState } from 'react';
import './Menu.css';
import openButton from './images/open-button.svg';

export const Menu = ({children}) => {
    const [ open, setOpen ] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    return <div className="menu">
        <div className={`open-button ${open ? 'open' : ''}`} onClick={toggleOpen}>
            <img src={openButton} alt="Open menu"/>
        </div>
        { open && 
            <div className="content">
                {children.map((child, i) => <div key={i.toString()}>{ child }</div>)}
            </div>
        }
    </div>;
}