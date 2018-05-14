import { takeLatest, call, put } from 'redux-saga/effects';

// reducer(action)
import { actionType as loginReducer } from '../reducers/login';
import { actionType as userCenterReducer } from '../reducers/userCenter';

// api接口
import * as login from 'api/login';

export const actionType = {
    userLogin: 'login/login',
    googleValidate: 'login/googleValidate',
    phoneCode: 'login/phoneCode',
    phoneValidate: 'login/phoneValidate',
    loginOut: 'login/loginOut'
};

// 登录
export function* userLogin({ payload: { query, success, fail, error } }) {
	try {
		const { data } = yield call(login.login, query);
		if (data.error_code === 200) {
            console.log(data.data)
			success(data.data);
		} else {
			fail(data.error_code);
		}
	} catch (err) {
		error(err);
	}
	//yield put(userCenterReducer.setUserInfo, data);
}

// google验证
export function* googleValidate({ payload: { query, success, fail, error } }) {
	try {
		const { data } = yield call(login.googleValidate, query);
		if (data.error_code === 200) {
			console.log(data);
			success(data.data);
		} else {
			fail(data.error_code);
		}
	} catch (err) {
		error(err);
	}
}

// 发送手机验证码
export function* phoneCode({ payload: { query, success, fail, error } }) {
	try {
		const { data } = yield call(login.phoneCode, query);
		if (data.error_code === 200) {
			console.log(data);
			success(data.data);
		} else {
			fail(data.error_code);
		}
	} catch (err) {
		error(err);
	}
}

// 手机验证
export function* phoneValidate({ payload: { query, success, fail, error } }) {
	try {
		const { data } = yield call(login.phoneValidate, query);
		if (data.error_code === 200) {
			console.log(data);
			success(data.data);
		} else {
			fail(data.error_code);
		}
	} catch (err) {
		error(err);
	}
}

// 退出登陆
export function* loginOut({ payload: { query, success, fail, error} }) {
  try{
    const { data } = yield call(login.logout,query);
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
      takeLatest(actionType.userLogin, userLogin),
      takeLatest(actionType.googleValidate, googleValidate),
      takeLatest(actionType.phoneCode, phoneCode),
      takeLatest(actionType.phoneValidate, phoneValidate),
      takeLatest(actionType.loginOut, loginOut),
    //   takeLatest(actionType.setInfo, setInfo),
    ]
}
