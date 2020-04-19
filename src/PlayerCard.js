import React from 'react';
import { PlayerCardSkeleton } from './PlayerCardSkeleton';

export const PlayerCard = ({ name, stats, picture }) => {
  if(!stats) return <PlayerCardSkeleton/>;

  return <div className="player-card">
    <div className="row">
      <div className="picture">
        <img src="https://d3k2oh6evki4b7.cloudfront.net/req/202001270/images/headshots/3/35baa190_davis.jpg" style={{maxWidth: "100%", maxHeight: "100%"}}/>
      </div>
      <div className="name">{name}</div>
    </div>
    <div className="stats">
      {
        Object.keys(stats).map(key => 
          <div className="row" key={key}>
            <div className="stat stat-name">{key}</div>
            <div className="stat stat-value">{stats[key]}</div>
          </div>
        )
      } 
    </div>
  </div>;
};