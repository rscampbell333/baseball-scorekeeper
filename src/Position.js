import React, { Component } from 'react';
import { Result } from './Result';
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
            } else {
                this.results = [];
            }
        }
    }

    handleResultUpdate = (stats) => {
        this.results[stats.inning - 1] = stats;
        
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
        const innings = this.props.innings ? this.props.innings : 9;
        const players = Array.from({length: innings}, (e, i) => (
            <div key={`${this.props.number}-${i}`} className="inning">
                <Result inning={i + 1} onChange={this.handleResultUpdate} result={this.props.stats && this.props.stats.results ? this.props.stats.results[i] : undefined}/>
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

