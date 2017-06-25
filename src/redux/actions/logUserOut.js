import axios from 'axios';
import { LOG_USER_OUT } from './actionTypes';

export const logUserOut = () => ({
  type: LOG_USER_OUT,
});

export const logOut = () => (dispatch, getState) => {
  return axios.get('http://localhost:3000/api/user/logout').then((res) => {
    dispatch(logUserOut());
    return Promise.resolve();
  });
};
