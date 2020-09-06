import React from 'react';
import { addDecorator } from '@storybook/react';
import 'typeface-oxygen';
import '../src/App.css';
import '../src/index.css';

const style = {
  textAlign: 'center',
  backgroundColor: "rgb(246, 249, 252)",
  height: "100vh",
  width: "100vw",
  overflowY: "scroll",
  padding: "10px",
  boxSizing: "border-box"
};

addDecorator(storyFn => <div className="light" style={style}>{storyFn()}</div>);