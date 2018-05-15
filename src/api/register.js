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
 * @param  phoneCode { phone, nationCode, validate }
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
 * 提交手机验证码
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
 * 邮箱注册
 * `email` 邮箱
 * `pwd` 密码
 * `confirm_pwd` 确认密码
 */
export function registerEmail(query) {
    return request({
      url: '/api/m/registerEmail',
      method: 'post',
      data: query
    });
  }

 /** 
 * 邮箱验证
 * `email` 邮箱
 * `pwd` 密码
 * `confirm_pwd` 确认密码
 */
export function emailValidate(query) {
    return request({
      url: '/api/m/validateEmail',
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

/**
 * 重发邮箱
 * `email` 邮箱
 * `validate` 验证码
 * `type` 邮件类型: type=1为忘记密码;type=0为邮箱验证
 * `lang` 语言 (zh/en)
 */
export function resend(query) {
  return request({
    url: '/api/email',
    method: 'post',
    data: query
  });
}