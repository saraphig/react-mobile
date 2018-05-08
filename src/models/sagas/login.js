import { takeLatest, call, put } from 'redux-saga/effects';

// reducer(action)
import { actionType as loginReducer } from '../reducers/login';

// api接口
import * as login from 'api/login';


export const actionType = {
    setToken: 'login/setToken'
}

export function* setToken({ payload }) {
    yield put({ type: loginReducer.setToken, data: payload });
}


export default function* root() {
    yield [
      takeLatest(actionType.setToken, setToken),
    ]
}
