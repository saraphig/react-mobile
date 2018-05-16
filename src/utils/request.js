import axios from 'axios';
import { url } from 'src/config.js';
import qs from 'qs';
import { delCookie } from './comFunction';

const axiosReq = axios.create({
  timeout: 10000,
  baseURL: url.baseUri,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  withCredentials:true
});

// const baseUri = __DEV__ ? url : url';

function checkStatus(response) {
  if (Number(response.data['error_code']) === 110 || Number(response.data.error) ===10003) {
    // token失效退出到登陆页
    // localStorage.removeItem('token');
    delCookie('token');
    window.location = '/login?connect=0'; // login页面使用判断显示登陆失效
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
