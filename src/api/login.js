import request from 'utils/request';

// 登录
export function login(query){
    return request({
        url: '/api/m/login',
        method: 'post',
        data: query
    })
}

// 谷歌验证(二次验证)
export function googleValidate(query) {
    return request({
        url: '/api/tokenByGoogleAuth',
        method: 'post',
        data: query
    });
}  

// 手机验证（二次验证）发送验证码
export function phoneCode(query) {
    return request({
        url: '/api/m/phoneCode',
        method: 'post',
        data: query
    });
}

// 手机验证（二次验证）
export function phoneValidate(query) {
    return request({
        url: '/api/m/loginWithPhone',
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
// export function phoneCode(query) {
//     return request({
//       url: '/api/phoneCode',
//       method: 'post',
//       data: query
//     });
//   }
  
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
  
  export function phoneChecks(query) {
    return request({
      url: '/api/phoneCheck',
      method: 'post',
      data: query
    });
  }