import createReducer from './createReducer';

const initState = {
    market: [],
    marketData: [],
    price: null,
    priceAll: []
};

export const actionType = {
    setMarket: 'trading/market',
    setMarketData: 'trading/marketData',
    setPrice: 'trading/price',
    setPriceAll: 'trading/priceAll',
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
    [actionType.setPriceAll]: (state, { payload }) => {
        return {...state, priceAll: payload}
    },
}

export default createReducer(initState, reducer);