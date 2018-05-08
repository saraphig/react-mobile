import request from 'utils/request';

// 登录
export function login(query){
    return request({
        url: '/api/login',
        method: 'post',
        data: query
    })
}

// 注册
export function register(query) {
    return request({
      url: '/api/register',
      method: 'post',
      data: query
    });
}

// 谷歌验证
export function validate(query) {
    return request({
        url: '/api/googleValidate',
        method: 'post',
        data: query
    });
}  

// 退出登录
export function logout(query) {
    return request({
      url: '/api/logout',
      method: 'post',
      data: query
    });
}

/**
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