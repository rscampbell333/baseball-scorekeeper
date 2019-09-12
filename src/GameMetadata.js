import React, { useState, useEffect } from 'react';
import { EditableText, DatePicker } from './base-components';
import './GameMetadata.css';

export const GameMetadata = ({onChange}) => {
    const [ teamName, setTeamName ] = useState("");
    const [ date, setDate ] = useState("");

    useEffect(() => {
        if(onChange) {
            onChange({ teamName, date });
        }
    }, [teamName, date, onChange]);

    return <div className="game-metadata">
        <div className="team-name-wrapper metadata-wrapper">
            <div className="team-name">
                <EditableText onChange={setTeamName}/>
            </div>
        </div>
        <div className="game-date-wrapper metadata-wrapper">
            <div className="game-date">
                <DatePicker onChange={setDate}/>
            </div>
        </div>
    </div>;
}