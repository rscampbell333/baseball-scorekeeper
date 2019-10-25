import React from 'react';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import './Table.css';

export const Table = ({headers, rows, onSelect, onDelete, loading}) => (
    <div className="table">
        <TableHeader labels={headers}/>
        <div className="data">
            {!loading && rows.map(row => <TableRow id={row.id} key={row.id} columns={row.data} onSelect={onSelect} onDelete={onDelete}/>)}
            {loading && Array.from({length: 3}, (v, k) => <TableRow key={k.toString()} loading={true}/>)}
        </div>
    </div>
)