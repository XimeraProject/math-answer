import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Answer from './answer';
import Math from './math';

// import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(
  <div>
  <p>Type in \(x^2\)</p>
  <Answer answer="x^2"/>

  <br />
  <Math input="x+" />
  </div>,
   document.getElementById('Question1')
 );
