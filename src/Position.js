import React, { Component } from 'react';
import { BaseballField } from './BaseballField';
import './Position.css';
import { PlayerNames } from './PlayerNames';

export class Position extends Component {

    constructor(props) {
        super(props);

        if(this.props.stats) {
            if(this.props.stats.players) {
                this.players = this.props.stats.players;
            }

            if(this.props.stats.results) {
                this.results = this.props.stats.results;
            }
        }
    }

    handleResultUpdate = (stats) => {
        console.log(this.results);
        this.results[stats.inning - 1] = stats;
        console.log(this.results);
        
        if (this.props.onUpdate) {
            this.props.onUpdate({ position: this.props.number, results: this.results, players: this.players });
        }
    }

    handlePlayerUpdate = (players) => {
        this.players = players;

        if (this.props.onUpdate) {
            this.props.onUpdate({ position: this.props.number, results: this.results, players: this.players });
        }
    }

    render = () => {
        let players = Array.from({length: 9}, (e, i) => (
            <div key={`${this.props.number}-${i}`} className="inning">
                <BaseballField inning={i + 1} onChange={this.handleResultUpdate} result={this.props.stats && this.props.stats.results ? this.props.stats.results[i] : undefined}/>
            </div>
        ));
        
        return <div className="position">
            <div className="players left-column">
                <PlayerNames onChange={this.handlePlayerUpdate} players={this.props.stats ? this.props.stats.players : undefined}/>
            </div>
            <div className="results">
                {players}
            </div>
        </div>
    }
}

