import React from 'react';
import deleteIcon from './icons/delete.png';
import Skeleton from '@material-ui/lab/Skeleton';

export const TableRow = ({id, loading, columns, onSelect, onDelete, numColumns}) => {
    
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
            { !loading && columns.map((column, index) => <div key={index.toString()} className="table-column">{column}</div>) }
            { !loading && onDelete && <img className="delete-icon" src={deleteIcon} onClick={handleDelete} alt="delete"/> }
            { loading && Array.from({length: numColumns}, (v, k) => (
                <div className="table-column">
                    <Skeleton variant="text" key={k.toString()}/>
                </div>
            ))}
        </div>
    )
}