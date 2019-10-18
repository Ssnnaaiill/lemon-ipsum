import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import './Animation.css';
import * as serviceWorker from './serviceWorker';
import Promise from 'promise-polyfill';

// to add to window
if (!window.Promise) {
  window.Promise = Promise;
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();