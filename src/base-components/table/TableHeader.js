import React from 'react';

export const TableHeader = ({labels}) => (
    <div className="table-header table-row">
        {labels.map((label, i) => <div key={i.toString()} className="table-column">{label}</div>)}
    </div>
)