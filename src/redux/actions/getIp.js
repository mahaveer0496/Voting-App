import axios from 'axios';
import { GET_IP, GET_IP_SUCCESS, GET_IP_FAIL } from './actionTypes';

export const getIp = () => ({
  type: GET_IP,
});

export const getIpSuccess = ip => ({
  type: GET_IP_SUCCESS,
  ip,
});

export const getIpFail = () => ({
  type: GET_IP_FAIL,
});

export const fetchIp = () => (dispatch, getState) => {
  dispatch(getIp());
  return axios.get('https://ipinfo.io/json').then((res) => {
    const { ip } = res.data;
    if (ip) {
      dispatch(getIpSuccess(ip));
      return Promise.resolve(ip);
    }
    dispatch(getIpFail());
    return Promise.reject('could not get Ip please try later');
  });
};
