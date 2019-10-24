import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
    render = () => {
        const innings = this.props.innings ? this.props.innings : 9;
        return <div className="header">
            <div className="left-column">
                Players
            </div>
            { Array.from({length: innings}, (e, i) => <div key={i.toString()} className="inning inning-header">{i + 1}</div>) }
            <div className="end inning"></div>
        </div>
    }
}