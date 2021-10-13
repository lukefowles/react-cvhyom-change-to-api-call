import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import Card from './components/Card';
import './index.css';
import Cardlist from './components/Cardlist';

ReactDOM.render(
  <div>
    <Cardlist />
  </div>,
  document.getElementById('root')
);
