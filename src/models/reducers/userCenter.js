import createReducer from './createReducer';
//import { getCookie } from "utils/comFunction";
const initState = {
    info: {},
    //token: getCookie('token') || '',
    myCoinAccount: 0
};

export const actionType = {
    setUserInfo: 'userCenter/setUserInfo'
};

const reducer = {
    [actionType.setUserInfo]: (state, { payload }) => {
        return {...state, info: payload}
    },
}

export default createReducer(initState, reducer);