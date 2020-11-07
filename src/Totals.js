import React, { useState } from 'react';
import { InningTotals } from './InningTotals';
import { isHit } from './utils/utils';
import './Totals.css';

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
          if(isHit(result.play)) {
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
      { inningTotals.map((inningTotal, i) => <InningTotals {...inningTotal} key={i}/>)}
    </div>
  </div>
}