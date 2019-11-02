import React, { useState, useEffect } from 'react';
import { usePrevious } from './hooks';
import { Position } from './Position.js';
import './InningsGrid.css';
import { Header } from './Header'; 

export const InningsGrid = ({ initStats, onChange, innings }) => {
    
    const [ stats, setStats ] = useState(initStats || Array.from({length: 9}, (v, i) => ({})));
    const prevInnings = usePrevious(innings);

    useEffect(() => onChange && onChange(stats), [ stats, onChange ]);
    useEffect(() => {
        if(prevInnings && prevInnings !== innings) {
            window.scroll(window.scroll(window.outerWidth, 0));
        }
    }, [innings, prevInnings]);

    const onPositionUpdate = (results) => {
        const newStats = stats ? [...stats] : [];
        stats[results.position - 1] = results;
        setStats(newStats);
    }

    const positions = stats.map((position, i) => <Position number={i + 1} innings={innings} key={i} stats={position} onUpdate={onPositionUpdate}/>)

    return <div className="innings-grid">
        <Header innings={innings}/>
        <div className="grid">
            {positions}
        </div>
    </div>;
}
