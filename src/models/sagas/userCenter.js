import { takeLatest, call, put } from 'redux-saga/effects';

// reducer(action)
import { actionType as userCenterReducer } from '../reducers/userCenter';

// api接口
import * as userCenterService from 'api/userCenter';

export const actionType = {
    setInfo: 'userCenter/setInfo',
    getInfo: 'userCenter/getInfo',
};

export function* setInfo({ payload: { query, success, fail } }) {
	console.log(query);
	// const { data } = yield call(userCenterService.inviteInfo, query);
	// if (!data.error) {
	// 	success(data.result);
	// } else {
	// 	fail(data.error);
	// }
	try {
		const { data } = yield call(userCenterService.inviteInfo, query);
		if (data.error_code === 200) {
			success(data.data);
		} else {
			fail(data.error_code);
		}
	} catch (err) {
		error(err);
    }
}
export function* getInfo({ payload: { query, success, fail } }) {
	try {
		const { data } = yield call(userCenterService.getUserInfo, query);
		console.log(data);
		if (data.error_code === 200) {
			success(data.data);
		} else {
			fail(data.error_code);
		}
	} catch (err) {
		error(err);
    }
}
export default function* root() {
	yield [
        takeLatest(actionType.setInfo, setInfo),
        takeLatest(actionType.getInfo, getInfo)
    ];
}
