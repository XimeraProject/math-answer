import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AnswerBlank from './answerblank';

// import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(
  <div>
  <p>Type in \(x^2\)</p>
  <AnswerBlank  answer="x^2" >
  </AnswerBlank>
  </div>,
   document.getElementById('Question1')
 );
