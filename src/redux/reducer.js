import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as type from './actions/actionTypes';

const initialState = {
  fetchingUser: false,
  isAuthenticated: false,
  email: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.AUTHORIZING_USER:
      return Object.assign({}, state, {
        fetchingUser: true,
        isAuthenticated: false,
        email: '',
      });

    case type.AUTHORIZING_SUCCESS:
      return Object.assign({}, state, {
        fetchingUser: false,
        isAuthenticated: true,
        email: action.email,
      });

    case type.AUTHORIZING_FAIL:
      return Object.assign({}, state, {
        fetchingUser: false,
        isAuthenticated: false,
        email: '',
      });

    case type.LOG_USER_IN:
      return Object.assign({}, state, {
        fetchingUser: true,
        isAuthenticated: false,
        email: '',
      });

    case type.LOG_USER_SUCCESS:
      return Object.assign({}, state, {
        fetchingUser: false,
        isAuthenticated: true,
        email: action.email,
      });

    case type.LOG_USER_FAIL:
      return Object.assign({}, state, {
        fetchingUser: false,
        isAuthenticated: false,
        email: '',
      });

    case type.LOG_USER_OUT:
      return Object.assign({}, state, {
        fetchingUser: false,
        isAuthenticated: false,
        email: '',
      });

    default:
      return state;
  }
};

export default createStore(reducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
