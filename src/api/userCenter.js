import request from 'utils/request';


// 我的邀请
export function inviteInfo(query) {
    return request({
      url: '/api/inviteInfo',
      method: 'post',
      data: query,
    });
<<<<<<< HEAD
  }

// 获取个人信息
export function getUserInfo(query) {
  return request({
      url: '/api/',
      method: 'post',
      data: query,
  });
}
=======
}

// 用户信息
export function getUserInfo(query) {
    return request({
        url: '/api/info',
        method: 'post',
        data: query,
    });
}

// 个人中心手动续费开关
export function topFeeUpdate(query) {
    return request({
        url: '/api/topFeeUpdate',
        method: 'post',
        data: query,
    });
}

>>>>>>> 09f2b21dbfe8d1b1c3bab072111894a12321933b
