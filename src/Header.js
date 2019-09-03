import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
    render = () => (
        <div className="header">
            <div className="left-column">
                Players
            </div>
            { Array.from({length: 9}, (e, i) => <div key={i.toString()} className="inning inning-header">{i + 1}</div>) }
            <div className="end inning"></div>
        </div>
    )
}