import React, { useState } from 'react';
import { EditableText } from './base-components/EditableText';
import './PlayForm.css';

const plays = [
  '1B',
  '2B',
  '3B',
  'HR',
  'BB',
  'IBB',
  'HBP',
  'K',
  'ꓘ',
  'DP',
  'U',
  'P',
  'L',
  'F',
  'SAC',
  'SF',
  'FC',
  'E'
];

export const PlayForm = ({result = {}}) => {
  const [ fielders, setFielders ] = useState(result.fielders || '');
  const [ play, setPlay ] = useState(result.play); 

  const handlePlayChange = (play) => setPlay(play);
  const handleFielderChange = () => {};

  return <div className="play-form">
    <div className="play">
      <select value={play}>
        {plays.map(play => <option value={play} key={play}>{play}</option>)}
      </select>
    </div>
    <div className="fielders">
      <EditableText onChange={handleFielderChange} placeholder="result" value={fielders}/>
    </div>
  </div>;
}
