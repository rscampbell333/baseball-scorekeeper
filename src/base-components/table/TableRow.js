import React from 'react';

export const TableRow = ({id, columns, onSelect}) => {
    
    const handleClick = () => {
        if(onSelect) {
            onSelect(id);
        }
    }

    return (
        <div className="table-row" onClick={handleClick}>
            {columns.map((column, index) => <div key={index.toString()} className="table-column">{column}</div>)}
        </div>
    )
}