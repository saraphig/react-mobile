import { takeLatest, call, put } from 'redux-saga/effects';

// reducer(action)
// import { actionType as loginReducer } from '../reducers/login';

// api接口
import * as register from 'api/register';


export const actionType = {
    getPhoneCode: 'register/getPhoneCode',
    phoneNext: 'register/phoneNext',
    registerEmail: 'register/registerEmail',
    emailValidate: 'register/emailValidate',
    // setInfo: 'login/setInfo'
}

// 获取手机验证码
export function* getPhoneCode({ payload: { query, success, fail, error} }) {
    try{
        const { data } = yield call(register.phoneCode,query)
        if (data.error_code === 200) {
            success(data.data);
        } else {
            fail(data.error_code);
        }
    } catch(err){
        error(err)
    }
}

// 提交手机验证码
export function* phoneNext({ payload: { query, success, fail, error} }) {
    try{
        const { data } = yield call(register.phoneNext,query)
        if (data.error_code === 200) {
            success(data.data);
        } else {
            fail(data.error_code);
        }
    } catch(err){
        error(err)
    }
}


// 邮箱注册
export function* registerEmail({ payload: { query, success, fail, error} }) {
    try{
        const { data } = yield call(register.registerEmail,query)
        if (data.error_code === 200) {
            success(data.data);
        } else {
            fail(data.error_code);
        }
    } catch(err){
        error(err)
    }
}


// 邮箱验证
export function* emailValidate({ payload: { query, success, fail, error} }) {
    try{
        const { data } = yield call(register.emailValidate,query)
        if (data.error_code === 200) {
            success(data.data);
        } else {
            fail(data.error_code);
        }
    } catch(err){
        error(err)
    }
}


export default function* root() {
    yield [
      takeLatest(actionType.getPhoneCode, getPhoneCode),
      takeLatest(actionType.phoneNext, phoneNext),
      takeLatest(actionType.registerEmail, registerEmail),
      takeLatest(actionType.emailValidate, emailValidate),
    ]
}
