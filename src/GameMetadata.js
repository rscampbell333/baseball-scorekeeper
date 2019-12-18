import React from 'react';
import { EditableText, DatePicker } from './base-components';
import './GameMetadata.css';
import plusSign from './images/icons8-plus.svg';

export const GameMetadata = ({addInning, team, onTeamChange, date, onDateChange, menu}) => {
    return <div className="game-metadata">
        <div className="main-menu">
            {menu}
        </div>
        <div className="team-name-wrapper metadata-wrapper">
            <div className="team-name">
                <EditableText value={team} onChange={onTeamChange} placeholder="Team Name"/>
            </div>
        </div>
        <div className="game-date-wrapper metadata-wrapper">
            <div className="game-date">
                <DatePicker date={date} onChange={onDateChange}/>
            </div>
        </div>
        <div className="add-inning metadata-wrapper" onClick={addInning}>
            <img src={plusSign} alt="Add inning"/>
        </div>
    </div>;
}