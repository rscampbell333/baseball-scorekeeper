import React from 'react';
import { BaseballField } from './BaseballField';

export default {
  component: BaseballField,
  title: 'BaseballField'
};

export const empty = () => <BaseballField/>;
export const reachedFirst = () => <BaseballField farthestBase={1}/>;