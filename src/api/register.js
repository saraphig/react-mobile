import request from 'utils/request';

// 注册
export function register(query) {
    return request({
      url: '/api/register',
      method: 'post',
      data: query
    });
}

/**
 * 获取手机验证码
 * @param  phoneCode { phone, nationCode, verifyCode }
 *
 */
export function phoneCode(query) {
    return request({
      url: '/api/phoneCode',
      method: 'post',
      data: query
    });
  }
  
/**
 * @param  phoneNext { phone, nationCode, verifyCode, inviterCode }
 *
 */

export function phoneNext(query) {
    return request({
        url: '/api/registerPhone',
        method: 'post',
        data: query
    });
}
/** 
 * `email` 邮箱
 * `pwd` 密码
 * `confirm_pwd` 确认密码
 */
export function registerEmail(query) {
    return request({
      url: '/api/registerEmail',
      method: 'post',
      data: query
    });
  }
  
  export function phoneChecks(query) {
    return request({
      url: '/api/phoneCheck',
      method: 'post',
      data: query
    });
  }