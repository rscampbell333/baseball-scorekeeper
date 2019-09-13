import React, { Component } from 'react';
import { PlayerName } from './PlayerName';
import './PlayerNames.css';

export class PlayerNames extends Component {
    
    state = { players: this.props.players ? this.props.players : [] }

    handlePlayerUpdate = (player, id) => {
        //only store and update if there is a value
        if(player.name && player.name !== "" && (id === this.state.players.length || player.name !== this.state.players[id].name)) {
            const players = [...this.state.players, { name: player.name, since: 0}]
            this.setState({ players });

            if(this.props.onChange) {
                this.props.onChange(players);
            }
        }
    }

    buildPlayerComponents = () => {
        const playerComponents = this.state.players.map((player, index) => (
            <PlayerName initName={player.name} 
                        showInningSelection={index > 0} 
                        id={index} 
                        key={index.toString()} 
                        onChange={this.handlePlayerUpdate}/>
        ));

        playerComponents.push(<PlayerName id={this.state.players.length} 
                                          showInningSelection={this.state.players.length > 0} 
                                          key={this.state.players.length.toString() } 
                                          onChange={this.handlePlayerUpdate}/>);

        return playerComponents;
    }

    render = () => (
        <div className="player-names">
            {this.buildPlayerComponents()}
        </div>
    )

}