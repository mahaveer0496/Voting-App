import axios from 'axios';
import { LOG_USER_OUT } from './actionTypes';

export const logUserOut = () => ({
  type: LOG_USER_OUT,
});

export const logOut = history => (dispatch, getState) => {
  axios.get('http://localhost:3000/api/user/logout').then((res) => {
    history.replace('/');
    return dispatch(logUserOut());
  });
};
