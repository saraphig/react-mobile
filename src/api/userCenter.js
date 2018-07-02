import request from 'utils/request';


// 我的邀请
export function inviteInfo(query) {
    return request({
      url: '/api/inviteInfo',
      method: 'post',
      data: query,
    });
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

// 获得佣金
export function getFeeBack(query) {
    return request({
        url: '/api/feeBackTotal',
        method: 'post',
        data: query
    });
}

// 获取资产币种图标
export function iconList(query) {
    return request({
        url: '/api/coinIconList',
        method: 'get',
        data: query
    });
}


/**
 * 邀请历史明细
 * @param {token,page} query
 */
export function inviteDetail(query) {
    return request({
      url: '/api/inviteDetail',
      method: 'post',
      data: query
    });
  }