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
  axios.post('http://localhost:3000/api/user/login', {
    email,
    password,
  }).then((res) => {
    console.log(res.data);
    if (res.data.email) return dispatch(logUserSuccess(res.data.email));
    return dispatch(logUserFail());
  });
};
