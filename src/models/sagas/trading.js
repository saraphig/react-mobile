import { takeLatest, call, put } from 'redux-saga/effects';

// reducer(action)
import { actionType as loginReducer } from '../reducers/login';

// api接口
import * as trading from 'api/trading';


export const actionType = {
    tradeApi: 'trade/tradeApi'
}

export function* tradeApi({ payload: { query, success, fail } }) {
    console.log(query)
    const { data } = yield call(trading.Api, query)
    if (!data.error) {
        success(data.result);
    } else {
        fail(data.error)
    }
}


export default function* root() {
    yield [
      takeLatest(actionType.tradeApi, tradeApi)
    ]
}
