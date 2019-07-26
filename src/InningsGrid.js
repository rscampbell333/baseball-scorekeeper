import React, {Component} from 'react';
import { Position } from './Position.js';
import './InningsGrid.css';
import { Header } from './Header'; 

export class InningsGrid extends Component {
    
    constructor(props) {
        super(props);
        this.positionStats = [];

        if(localStorage.getItem('game')) {
            this.defaultStats = JSON.parse(localStorage.getItem('game'));
            console.log(this.defaultStats);
        }
    }

    render = () => {
        let positions;

        if(this.defaultStats) {
            positions = this.defaultStats.map((position, i) => <Position number={i + 1} key={i} stats={position} onUpdate={this.onPositionUpdate}/>)
        } else {
            positions = Array.from({length: 9}, (e, i) => <Position number={i + 1} key={i} onUpdate={this.onPositionUpdate} />);
        }



        return <div className="inningsGrid">
            <Header/>
            <div className="grid">
                {positions}
            </div>
        </div>;
    }

    onPositionUpdate = (results) => {
        this.positionStats[results.position - 1] = results;
        localStorage.setItem('game', JSON.stringify(this.positionStats));
    }
}