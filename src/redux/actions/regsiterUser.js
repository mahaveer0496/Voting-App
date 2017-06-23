import axios from 'axios';
import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL } from './actionTypes';

export const registerUser = () => ({
  type: REGISTER_USER,
});

export const registerUserSuccess = email => ({
  type: REGISTER_USER_SUCCESS,
  email,
});

export const registerUserFail = () => ({
  type: REGISTER_USER_FAIL,
});

export const register = (email, password) => (dispatch, getState) => {
  dispatch(registerUser());
  return axios.post('http://localhost:3000/api/user/register', {
    email,
    password,
  }).then((res) => {
    if (res.data.email) {
      dispatch(registerUserSuccess(res.data.email));
      return Promise.resolve(res.data.email);
    }
    dispatch(registerUserFail());
    return Promise.reject(res.data.message);
  });
};
