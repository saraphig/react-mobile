import request from 'utils/request';


// 打开webSocket
export function Api(query) {
  return request({
    url: '/',
    method: 'post',
    data: query,
  });
};