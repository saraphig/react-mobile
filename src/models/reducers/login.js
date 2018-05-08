import createReducer from './createReducer';

const initState = {
    token: '99999'
};

export const actionType = {
    setToken: 'login/setToken'
};

const reducer = {
    [actionType.setToken]: (state, { payload }) => {
        return {...state, token: payload}
    },
}

export default createReducer(initState, reducer);