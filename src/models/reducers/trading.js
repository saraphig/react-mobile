import createReducer from './createReducer';

const initState = {
    market: [],
    marketData: [],
    price: null
};

export const actionType = {
    setMarket: 'trading/market',
    setMarketData: 'trading/marketData',
    setPrice: 'trading/price',
};

const reducer = {
    [actionType.setMarket]: (state, { payload }) => {
        return {...state, market: payload}
    },
    [actionType.setMarketData]: (state, { payload }) => {
        return {...state, marketData: payload}
    },
    [actionType.setPrice]: (state, { payload }) => {
        return {...state, price: payload}
    },
}

export default createReducer(initState, reducer);