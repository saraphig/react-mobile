import createReducer from './createReducer';
const initState = {
    info: {},
    myCoinAccount: 0
};

export const actionType = {
    setUserInfo: 'userCenter/info',
    getUserInfo: 'userCenter/getMyInfo',
};

const reducer = {
    [actionType.setUserInfo]: (state, { data }) => {
        return {...state, userInfo: data}
    },
    [actionType.getUserInfo]: (state, { data }) => {
        return {...state, info: data}
    },
}

export default createReducer(initState, reducer);