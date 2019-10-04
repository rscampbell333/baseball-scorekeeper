import React from 'react';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import './Table.css';

export const Table = ({headers, rows, onSelect, onDelete}) => (
    <div className="table">
        <TableHeader labels={headers}/>
        <div className="data">
            {rows.map(row => <TableRow id={row.id} key={row.id} columns={row.data} onSelect={onSelect} onDelete={onDelete}/>)}
        </div>
    </div>
)