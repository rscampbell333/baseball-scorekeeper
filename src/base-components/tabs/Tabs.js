import React from 'react';
import { Tab } from './Tab';
import './Tabs.css';

export const Tabs = ({labels, selectedLabel, onSelect}) => (
    <div className="tabs">
        {labels.map((label, index) => <Tab onSelect={onSelect} label={label} selected={label === selectedLabel} key={index}/>)}
    </div>
);