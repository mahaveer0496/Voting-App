import axios from 'axios';
import { LOG_USER_IN, LOG_USER_SUCCESS, LOG_USER_FAIL } from './actionTypes';

export const logUserIn = () => ({
  type: LOG_USER_IN,
});

export const logUserSuccess = email => ({
  type: LOG_USER_SUCCESS,
  email,
});

export const logUserFail = () => ({
  type: LOG_USER_FAIL,
});

export const logUser = (email, password) => (dispatch, getState) => {
  dispatch(logUserIn());
  return axios.post('http://localhost:3000/api/user/login', {
    email,
    password,
  }).then((res) => {
    if (res.data.email) {
      dispatch(logUserSuccess(email));
      return Promise.resolve(res.data.email);
    }
    dispatch(logUserFail());
    return Promise.reject(res.data.message);
  });
};
