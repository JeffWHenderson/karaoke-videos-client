import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import configureStore from './store.js'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
