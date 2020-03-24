import React from 'react';
import { Result } from './Result';

export default {
  component: Result,
  title: 'Result',
  decorators: [storyFn => <div style={{width: '30em', margin: '0 auto'}}>{storyFn()}</div>]
};

export const Default = () => <Result/>;