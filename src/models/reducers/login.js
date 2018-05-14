import createReducer from './createReducer';

const initState = {
	token: ''
};

export const actionType = {
	token: 'login/token'
};

const reducer = {
	[actionType.token]: (state, { payload }) => {
		return { ...state, token: payload };
	}
};

export default createReducer(initState, reducer);
