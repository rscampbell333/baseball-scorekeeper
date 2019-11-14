import React from 'react';

export const Tab = ({label, selected, onSelect}) => (
    <div className={`tab ${selected ? '' : 'not-selected'}`} onClick={() => onSelect(label)}>
        {label}
    </div>
)