import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './redux/containers/AppContainer';
import store from './redux/store/store';

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('info'),
);
