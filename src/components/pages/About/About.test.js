import React from 'react';
import ReactDOM from 'react-dom';
import { About } from './About';

describe('About', () => {
  it('runs without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
