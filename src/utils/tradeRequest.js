import axios from 'axios';
import { url } from 'src/config.js';
import qs from 'qs';
// import { delCookie } from '../utils/commFunction';

const axiosReq = axios.create({
  timeout: 10000,
  baseURL: url.tradeUri,
  headers: { 'Content-Type': 'application/json' },
  // withCredentials:true
});

// const baseUri = __DEV__ ? url : url';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
export default function request(options) {
  return axiosReq(options)
    .then(checkStatus)
    .catch((error) => {

      if (error) {
        // TODO, show error
        // window.location = '/login';
        // alert('服务器开小差去了，请稍后重试')
      }
      console.log('request error', error.response);
    });
}
