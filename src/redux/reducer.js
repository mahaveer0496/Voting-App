import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AUTHORIZING_USER, AUTHORIZING_FAIL, AUTHORIZING_SUCCESS, LOG_USER_IN, LOG_USER_SUCCESS, LOG_USER_FAIL } from './actions/actionTypes';


const initialState = {
  fetchingUser: false,
  isAuthenticated: false,
  email: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZING_USER:
      return Object.assign({}, state, {
        fetchingUser: true,
        isAuthenticated: false,
        email: '',
      });

    case AUTHORIZING_SUCCESS:
      return Object.assign({}, state, {
        fetchingUser: false,
        isAuthenticated: true,
        email: action.email,
      });

    case AUTHORIZING_FAIL:
      return Object.assign({}, state, {
        fetchingUser: false,
        isAuthenticated: false,
        email: '',
      });

    case LOG_USER_IN:
      return Object.assign({}, state, {
        fetchingUser: true,
        isAuthenticated: false,
        email: '',
      });

    case LOG_USER_SUCCESS:
      return Object.assign({}, state, {
        fetchingUser: false,
        isAuthenticated: true,
        email: action.email,
      });

    case LOG_USER_FAIL:
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
