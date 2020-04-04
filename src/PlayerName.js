import React, { useState, useEffect } from 'react';
import { EditableText, Dropdown } from './base-components';

export const PlayerName = ({ initName = "", initSince = 1, onChange, showInningSelection, id }) => {
    const [ name, setName ] = useState(initName);
    const [ since, setSince ] = useState(initSince);

    useEffect(() => {
        if(onChange) onChange({ name, since: parseInt(since) }, id)
    }, [ name, since, onChange, id ]);

    useEffect(() => setName(initName), [initName, setName]);

    return <div className="player dashed-border-bottom">
        <EditableText value={name} onChange={setName} noValueClassName=""/>
        { showInningSelection && <Dropdown  className="inning-select" 
                                            value={initSince} 
                                            onChange={setSince} 
                                            options={Array.from({length: 9}, (v, k) => k+1)}/> }
    </div>
}