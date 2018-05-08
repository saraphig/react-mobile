import axios from 'axios';
import { url } from 'src/config.js';
import qs from 'qs';
// import { delCookie } from '../utils/commFunction';

const axiosReq = axios.create({
  timeout: 10000,
  baseURL: url.baseUri,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  withCredentials:true
});

// const baseUri = __DEV__ ? url : url';

function checkStatus(response) {
  if (response.data.error_code === 110) {
    // token失效退出到登陆页
    // localStorage.removeItem('token');
    // delCookie('token');
    window.location = '/login';
  }
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
export default function request(options) {
  // options = {
  //   ...options,
  //   data: qs.stringify(options.data),
  // };
  options.data = qs.stringify(options.data);
  return axiosReq(options)
    .then(checkStatus)
    .catch(error => {
      console.log(error);
      if (error) {
        // TODO, show error
      }
      console.log('request error', error);
    });
}
