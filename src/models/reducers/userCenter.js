import createReducer from './createReducer';
const initState = {
    info: {},
    myCoinAccount: 0
};

export const actionType = {
    setUserInfo: 'userCenter/info'
};

const reducer = {
    [actionType.setUserInfo]: (state, { data }) => {
        return {...state, userInfo: data}
    },
}

export default createReducer(initState, reducer);