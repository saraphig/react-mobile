import { takeLatest, call, put } from 'redux-saga/effects';

// reducer(action)
// import { actionType as loginReducer } from '../reducers/login';

// api接口
import * as register from 'api/register';


export const actionType = {
    getPhoneCode: 'register/getPhoneCode',
    // setInfo: 'login/setInfo'
}

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
export function* setInfo({ payload }) {
}


export default function* root() {
    yield [
      takeLatest(actionType.getPhoneCode, getPhoneCode),
    ]
}
