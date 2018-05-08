import createReducer from './createReducer';

const initState = {
    token: '99999'
};

export const actionType = {
    setToken: 'login/setToken'
};

const reducer = {
    [actionType.setToken]: (state, { data }) => {
        return {...state, token: data}
    },
}

export default createReducer(initState, reducer);