import React, { useState } from 'react';

export const InningTotals = ({ runs = 0, hits = 0, errors = 0}) => <div className="inning inning-total">
  <div className="total"><strong>R</strong> { runs }</div>
  <div className="total"><strong>H</strong> { hits }</div>
  <div className="total"><strong>E</strong> { errors }</div>
</div>;