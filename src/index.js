import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


fetch(`${process.env.PUBLIC_URL}/recipes.json`).then((response) => {
  return response.json();
}).then((j) => {
  ReactDOM.render(<App recipes={j} />, document.getElementById('root'));
  registerServiceWorker();
});
