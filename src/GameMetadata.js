import React, { useState, useEffect } from 'react';
import { EditableText, DatePicker } from './base-components';
import './GameMetadata.css';

export const GameMetadata = ({initMetadata, onChange}) => {
    const { teamName: initTeamName, date: initDate} = initMetadata || {};

    const [ teamName, setTeamName ] = useState(initTeamName);
    const [ date, setDate ] = useState(initDate);

    useEffect(() => {
        if(onChange) {
            onChange({ teamName, date });
        }
    }, [teamName, date, onChange]);

    return <div className="game-metadata">
        <div className="team-name-wrapper metadata-wrapper">
            <div className="team-name">
                <EditableText value={teamName} onChange={setTeamName}/>
            </div>
        </div>
        <div className="game-date-wrapper metadata-wrapper">
            <div className="game-date">
                <DatePicker date={initDate} onChange={setDate}/>
            </div>
        </div>
    </div>;
}