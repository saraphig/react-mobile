import tradeRequest from 'utils/tradeRequest';
import request from 'utils/request';


// 打开webSocket
export function Api(query) {
  return tradeRequest({
    url: '/',
    method: 'post',
    data: query,
  });
};

// 打开webSocket
export function coinPrice(query) {
  return request({
    url: '/api/coinPrice',
    method: 'get'
  });
};