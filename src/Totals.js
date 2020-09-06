import React, { useState } from 'react';
import { InningTotals } from './InningTotals';
import './Totals.css';

const hitPlays = new Set();
hitPlays.add('1B');
hitPlays.add('2B');
hitPlays.add('3B');
hitPlays.add('HR');

export const Totals = ({ stats }) => {
  const inningTotals = Array.from({length: 9}, f => ({runs: 0, hits: 0, errors: 0}));
  console.log(inningTotals);

  stats.forEach(({ results }) => {
    results && results.forEach((res) => {
      if(res) {
        const { farthestBase, result, inning } = res; 

        if(inning > inningTotals.length) {
          inningTotals[inning - 1] = {runs: 0, hits: 0, errors: 0};
        }

        const inningTotal = inningTotals[inning - 1];

        if(farthestBase === 4) {
          inningTotal.runs++;
        }

        if(result) {
          if(hitPlays.has(result.play)) {
            inningTotal.hits++;
          }

          if(result.play.indexOf('E') === 0) {
            inningTotal.errors++;
          }
        }
      }
    });
  });


  return <div className="totals">
    <div className="left-column">
    </div>
    <div className="inning-data">
      { inningTotals.map((inningTotal) => <InningTotals {...inningTotal}/>)}
    </div>
  </div>
}