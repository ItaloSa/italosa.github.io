import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'circular-std';
import './style.css';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
