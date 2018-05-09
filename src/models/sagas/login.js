import { takeLatest, call, put } from 'redux-saga/effects';

// reducer(action)
import { actionType as loginReducer } from '../reducers/login';

// api接口
import * as login from 'api/login';


export const actionType = {
    setToken: 'login/setToken',
    setInfo: 'login/setInfo'
}

export function* setToken({ payload: {query} }) {
   const { data } = yield call(login.login,query)
   yield put({ type: loginReducer.token, payload: data.status });
   console.log(data)
}
export function* setInfo({ payload }) {
}


export default function* root() {
    yield [
      takeLatest(actionType.setToken, setToken),
      takeLatest(actionType.setInfo, setInfo),
    ]
}
