import createReducer from './createReducer';
//import { getCookie } from "utils/comFunction";
const initState = {
    info: {},
    //token: getCookie('token') || '',
    myAssets:{
        myCoinAccount: 0,
        coinList:[]
    }
};

export const actionType = {
    setUserInfo: 'userCenter/setUserInfo',
    setMyCoinAccount: 'userCenter/myCoinAccount'
};

const reducer = {
    [actionType.setUserInfo]: (state, { payload }) => {
        return {...state, info: payload}
    },
    [actionType.setMyCoinAccount]: (state, { query }) => {
        let total = 0;
        const { value, result } = query;
        const coinList = result.map(item => {
            total += Number(item[value]);
            return {
                coin: item.asset,
                freeze: Number(item.freeze).toFixed(8),
                available: Number(item.available).toFixed(8),
                total: (Number(item.freeze) + Number(item.available)).toFixed(8),
                btcvalue: Number(item.btcvalue).toFixed(8),
                ethvalue: Number(item.ethvalue).toFixed(8),
                fee: item.fee ? Number(item.fee).toFixed(8) : 0,
                uesCandy: 0,
            };
        });
        total = Number(total.toFixed(8));
        if (Number.isNaN(total)) {
            total = 0;
        }
        const myAssets = {};
        myAssets.myCoinAccount=total;
        myAssets.coinList=coinList;

        return { ...state, myAssets:myAssets};
    }
}

export default createReducer(initState, reducer);