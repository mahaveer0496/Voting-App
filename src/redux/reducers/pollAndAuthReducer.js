import * as type from './../actions/actionTypes';

// (state, fetchingUser, isAuthenticated, email)
import authUtil from './../utilityFunctions/authUtil';

const initialState = {
  fetchingUser: false,
  isAuthenticated: false,
  email: '',
  polls: [],
};

const pollAndAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.AUTHORIZING_USER:
      return authUtil(state, true, false, '');

    case type.AUTHORIZING_SUCCESS:
      return authUtil(state, false, true, action.email);

    case type.AUTHORIZING_FAIL:
      return authUtil(state, false, false, '');

    case type.LOG_USER_IN:
      return authUtil(state, true, false, '');

    case type.LOG_USER_SUCCESS:
      return authUtil(state, false, true, action.email);

    case type.LOG_USER_FAIL:
      return authUtil(state, false, false, '');

    case type.LOG_USER_OUT:
      return authUtil(state, false, false, '');

    case type.REGISTER_USER:
      return authUtil(state, true, false, '');

    case type.REGISTER_USER_SUCCESS:
      return authUtil(state, false, true, action.email);

    case type.REGISTER_USER_FAIL:
      return authUtil(state, false, false, '');

    default:
      return state;
  }
};

export default pollAndAuthReducer;
