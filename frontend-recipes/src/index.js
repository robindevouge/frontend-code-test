import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function getJson(uri) {
    fetch(uri).then((response) => { 
        return response.json();
    }).then((j) => {
        console.log(j); 
        return j;
    });
}

const recipes = getJson('./recipes.json');

ReactDOM.render( < App/ > , document.getElementById('root'));
registerServiceWorker();
