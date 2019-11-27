import React from 'react';
import { PlayerName } from './PlayerName';
import './PlayerNames.css';

export const PlayerNames = ({players = [], onChange}) => {

    const handlePlayerUpdate = (player, id) => {
        //only store and update if there is a value
        if(id === players.length || (player.name  && player.name !== players[id].name)
            || (player.since !== players[id].since)) {
            const newPlayers = [...players];

            if(id < players.length) {
                newPlayers[id] = player;
            } else {
                newPlayers.push(player);
            }

            if(onChange) {
                onChange(newPlayers);
            }
        }
    }

    const playerComponents = players.map((player, index) => (
        <PlayerName initName={player.name} initSince={player.since} showInningSelection={index > 0} id={index} key={index.toString()} onChange={handlePlayerUpdate}/>
    ));

    playerComponents.push(<PlayerName id={players.length} showInningSelection={players.length > 0} key={players.length.toString() } onChange={handlePlayerUpdate}/>);

    return (
        <div className="player-names">
            {playerComponents}
        </div>
    );
}