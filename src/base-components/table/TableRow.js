import React from 'react';
import deleteIcon from './icons/delete.png';

export const TableRow = ({id, columns, onSelect, onDelete}) => {
    
    const handleClick = () => {
        if(onSelect) {
            onSelect(id);
        }
    }

    const handleDelete = e => {
        e.stopPropagation();
        onDelete(id);
    }

    return (
        <div className="table-row" onClick={handleClick}>
            { columns.map((column, index) => <div key={index.toString()} className="table-column">{column}</div>) }
            { onDelete && <img className="delete-icon" src={deleteIcon} onClick={handleDelete} alt="delete"/> }
        </div>
    )
}