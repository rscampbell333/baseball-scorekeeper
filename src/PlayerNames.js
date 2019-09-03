import React, { Component } from 'react';
import { PlayerName } from './PlayerName';
import './PlayerNames.css';

export class PlayerNames extends Component {
    
    state = { players: this.props.players ? this.props.players : [] }

    handlePlayerUpdate = (textValue, id) => {
        //only store and update if there is a value
        if(textValue !== "" && (id === this.state.players.length || textValue !== this.state.players[id].name)) {
            const players = [...this.state.players, { name: textValue, since: 0}]
            this.setState({players: players});

            if(this.props.onChange) {
                this.props.onChange(players);
            }
        }
    }

    buildPlayerComponents = () => {
        const playerComponents = this.state.players.map((player, index) => (
            <PlayerName name={player.name} showInningSelection={index > 0} key={index.toString()}/>
        ));

        playerComponents.push(<PlayerName showInningSelection={this.state.players.length > 0} key={this.state.players.length.toString()}/>);

        return playerComponents;
    }

    render = () => (
        <div className="player-names">
            {this.buildPlayerComponents()}
        </div>
    )

}