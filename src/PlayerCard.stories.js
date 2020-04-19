import React from 'react';
import { PlayerCard } from './PlayerCard';

export default {
  component: PlayerCard,
  title: 'Player Card',
  decorators: [storyFn => <div style={{width: '30em', margin: '0 auto', textAlign: 'left'}}>{storyFn()}</div>]
};

const stats = {
  BA: .344,
  OBP: .482,
  RBI: 1839
};

export const Default = () => <PlayerCard name="Ted Williams" stats={stats} picture="https://d3k2oh6evki4b7.cloudfront.net/req/202001270/images/headshots/3/35baa190_davis.jpg"/>
export const Skeleton = () => <PlayerCard/>;
