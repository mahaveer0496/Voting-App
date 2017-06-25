import axios from 'axios';
import { AUTHORIZING_USER, AUTHORIZING_SUCCESS, AUTHORIZING_FAIL } from './actionTypes';

export const authorizeUser = () => ({
  type: AUTHORIZING_USER,
});

export const authorizeSuccess = email => ({
  type: AUTHORIZING_SUCCESS,
  email,
});

export const authorizeFail = () => ({
  type: AUTHORIZING_FAIL,
});

export const getUser = () => (dispatch, getState) => {
  dispatch(authorizeUser());
  axios.get('http://localhost:3000/api/user/checkAuth').then((res) => {
    if (res.data.email) return dispatch(authorizeSuccess(res.data.email));
    return dispatch(authorizeFail());
  });
};
