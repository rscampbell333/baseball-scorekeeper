import React, { useState, useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import './PlayForm.css';

const plays = [
  {value: '', label: '', fielders: true},
  {value: '1B', label: '1B', fielders: false},
  {value: '2B', label: '2B', fielders: false},
  {value: '3B', label: '3B', fielders: false},
  {value: 'HR', label: 'HR', fielders: false},
  {value: 'BB', label: 'BB', fielders: false},
  {value: 'IBB', label: 'IBB', fielders: false},
  {value: 'HBP', label: 'HBP', fielders: false},
  {value: 'K', label: 'K', fielders: false},
  {value: 'ꓘ', label: 'ꓘ', fielders: false},
  {value: 'DP', label: 'DP', fielders: true},
  {value: 'U', label: 'U', fielders: true},
  {value: 'P', label: 'P', fielders: true},
  {value: 'L', label: 'L', fielders: true},
  {value: 'F', label: 'F', fielders: true},
  {value: 'SAC', label: 'SAC', fielders: true},
  {value: 'SF', label: 'SF', fielders: true},
  {value: 'FC', label: 'FC', fielders: true},
  {value: 'E', label: 'E', fielders: true}
];

export const PlayForm = ({result, onChange}) => {
  result = result ? result : {};

  const [ fielders, setFielders ] = useState(result.fielders);

  const defaultPlay = plays.find(play => play.value === result.play) || plays[0];
  const [ play, setPlay ] = useState(defaultPlay); 

  const handlePlayChange = event => setPlay(event.target.value);
  const handleFielderChange = (event) => setFielders(event.target.value);

  useEffect(() => {
    onChange({ play: play.value, fielders });
  }, [play, fielders, onChange]);

  return <div className="play-form">
    <FormControl className='play-form-input'>
      <InputLabel id='play-select-label' shrink={true}>Play</InputLabel>
      <Select
        labelId='play-select-label'
        id='play-select'
        value={play}
        onChange={handlePlayChange}
      >
        {plays.map(play => <MenuItem value={play} key={play.label}>{play.label}</MenuItem>)}
      </Select>
    </FormControl>
    <div className='play-form-input'>
      <TextField 
        required 
        id='fielders' 
        label='Fielders' 
        value={fielders}
        disabled={!play.fielders}
        onChange={handleFielderChange}
        InputLabelProps={{
          shrink: true,
        }}/>
    </div>
  </div>;
}
