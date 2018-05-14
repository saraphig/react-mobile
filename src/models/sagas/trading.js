import { takeLatest, call, put } from 'redux-saga/effects';

// reducer(action)
import { actionType as tradeReducer } from '../reducers/trading';

// api接口
import * as trading from 'api/trading';


export const actionType = {
    tradeApi: 'trade/tradeApi',
    setMarketData: 'trade/setMarketData',
    setPrice: 'trade/setPrice'
}

// 获取初始数据并存入store
export function* tradeApi({ payload: { query, success, fail } }) {
    // console.log(query)
    
    const { data } = yield call(trading.Api, query)
    if (!data.error) {
        yield put({ type: tradeReducer.setMarket, payload: data.result });
        success(data.result);
    } else {
        fail(data.error)
    }
}

// 设置更新的数据
export function* setMarketData({ payload }) {
    yield put({ type: tradeReducer.setMarketData, payload });
}


// 设置更新的数据
export function* setPrice({ payload }) {
    const { data } = yield call(trading.coinPrice)
    if (data.error_code === 200) {
       yield put({ type: tradeReducer.setPrice, payload: data.data.data });
    }
}


export default function* root() {
    yield [
      takeLatest(actionType.tradeApi, tradeApi),
      takeLatest(actionType.setMarketData, setMarketData),
      takeLatest(actionType.setPrice, setPrice)
    ]
}
