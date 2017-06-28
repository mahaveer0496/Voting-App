import * as type from './../actions/actionTypes';

const initialState = { ip: '' };

const getIpReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_IP:
      return Object.assign({}, state, { ip: '' });

    case type.GET_IP_SUCCESS:
      return Object.assign({}, state, { ip: action.ip });

    case type.GET_IP_FAIL:
      return Object.assign({}, state, { ip: '' });

    default:
      return state;
  }
};

export default getIpReducer;
