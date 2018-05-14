import request from 'utils/request';


// 我的邀请
export function inviteInfo(query) {
    return request({
      url: '/api/inviteInfo',
      method: 'post',
      data: query,
    });
  }

// 获取个人信息
export function getUserInfo(query) {
  return request({
      url: '/api/',
      method: 'post',
      data: query,
  });
}