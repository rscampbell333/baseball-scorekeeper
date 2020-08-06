import React, { useState, useEffect } from 'react';
import { EditableText, Dropdown } from './base-components';

export const PlayerName = ({ initName = "", initSince = 1, initFieldPosition = "", onChange, showInningSelection, id }) => {
    const [ name, setName ] = useState(initName);
    const [ since, setSince ] = useState(initSince);
    const [ fieldPosition, setFieldPosition] = useState(initFieldPosition);

    useEffect(() => {
        if(onChange) onChange({ name, since: parseInt(since), fieldPosition }, id)
    }, [ name, since, fieldPosition, onChange, id ]);

    useEffect(() => setName(initName), [initName, setName]);

    return <div className="player dashed-border-bottom">
        <div>
            <Dropdown className="inning-select"
                value={fieldPosition}
                onChange={setFieldPosition}
                IconComponent={() => <div/>}
                options={[' P', ' C', '1B', '2B', '3B', 'SS', 'LF', 'CF', 'RF', 'DH']} />
        </div>
        <EditableText value={name} onChange={setName} noValueClassName=""/>
        <div>
            <Dropdown  className="inning-select" 
                        value={initSince} 
                        onChange={setSince} 
                        options={Array.from({length: 9}, (v, k) => k+1)}/>
        </div>
    </div>
}