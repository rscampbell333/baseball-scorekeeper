import React, { Component } from 'react';
import { EditableText } from './EditableText';
import { Dropdown } from './Dropdown';
import './PlayerNames.css';

export class PlayerNames extends Component {
    
    state = { players: this.props.players ? this.props.players : [] }

    handlePlayerUpdate = (textValue) => {
        //only store and update if there is a value
        if(textValue !== "") {
            const players = [...this.state.players, { name: textValue, since: 0}]
            this.setState({players: players});

            if(this.props.onChange) {
                this.props.onChange(players);
            }
        }
    }

    buildPlayerComponents = () => {
        const playerComponents = this.state.players.map((player, index) => (
            <div className="player dotted-border-bottom" key={index.toString()}>
                <EditableText value={player.name} onChange={this.handlePlayerUpdate} noValueClassName=""/>
                <Dropdown options={Array.from({length: 9}, (v, k) => k+1)}/>
            </div>
        ));

        playerComponents.push(<div className="player dotted-border-bottom" key={playerComponents.length.toString()}>
                <EditableText value="" onChange={this.handlePlayerUpdate} noValueClassName=""/>
                <Dropdown options={Array.from({length: 9}, (v, k) => k+1)}/>
            </div>
        );

        return playerComponents;
    }

    render = () => (
        <div className="player-names">
            {this.buildPlayerComponents()}
        </div>
    )

}