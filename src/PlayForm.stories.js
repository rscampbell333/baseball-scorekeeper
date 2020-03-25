import React from 'react';
import { PlayForm } from './PlayForm';

export default {
  component: PlayForm,
  title: 'Play Form',
  decorators: [storyFn => <div style={{width: '30em', margin: '0 auto'}}>{storyFn()}</div>]
};

export const Default = () => <PlayForm onChange={() => {}}/>;
