import request from 'utils/request';


// 我的邀请
export function inviteInfo(query) {
    return request({
      url: '/api/inviteInfo',
      method: 'post',
      data: query,
    });
  }