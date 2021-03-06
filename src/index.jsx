import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import App from './components/App';

import store from './redux/reducer';

// import './styles/stylesheets/bootstrap.min.css';
import './styles/main.scss';

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('app'));

