import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function getData() {
  // create a new XMLHttpRequest
  var xhr = new XMLHttpRequest()

  // get a callback when the server responds
  xhr.onload = function() {
    // update the state of the component with the result here
    console.log(xhr.response);
    document.getElementById('server').innerHTML = xhr.response;
  }

  // open the request with the verb and the url
  xhr.open('GET', '/api/test')
  // send the request
  xhr.send()
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

getData();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
