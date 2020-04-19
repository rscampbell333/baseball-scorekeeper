import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import './PlayerCard.css';

export const PlayerCardSkeleton = () => {
  return <div className="player-card">
    <div className="row">
      <Skeleton variant="rect" className="picture"/>
      <Skeleton variant="rect" className="name"/>
    </div>
    <div className="stats">
      {
        Array.from({length: 3}).map(() => 
          <div className="row">
            <Skeleton variant="rect" className="stat stat-name"/>
            <Skeleton variant="rect" className="stat stat-value"/>
          </div>
        )
      } 
    </div>
  </div>;
};