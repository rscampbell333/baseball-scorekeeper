import React, { useState, useEffect } from 'react';
import { EditableText, Dropdown } from './base-components';

export const PlayerName = ({ initName = "", onChange, showInningSelection, id }) => {
    const [ name, setName ] = useState(initName);
    const [ since, setSince ] = useState(1);

    useEffect(() => {
        if(onChange) onChange({ name, since }, id)
    }, [ name, since, onChange, id ]);

    useEffect(() => setName(initName), [initName, setName]);

    return <div className="player dotted-border-bottom">
        <EditableText value={name} onChange={setName} noValueClassName=""/>
        { showInningSelection && <Dropdown onChange={setSince} options={Array.from({length: 9}, (v, k) => k+1)}/> }
    </div>
}