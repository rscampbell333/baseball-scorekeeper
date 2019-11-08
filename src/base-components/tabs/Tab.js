import React from 'react';

export const Tab = ({label, onSelect}) => (
    <div className="tab" onClick={() => onSelect(label)}>
        {label}
    </div>
)