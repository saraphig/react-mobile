import { takeLatest, call, put } from 'redux-saga/effects';

// reducer(action)
import { actionType as userCenterReducer } from 'models/reducers/userCenter';

// api接口
import * as userCenterService from 'api/userCenter';

export const actionType = {
    getInviteInfo:'userCenter/getInviteInfo',
    getUserInfo: 'userCenter/getUserInfo',
    topFeeUpdate: 'userCenter/topFeeUpdate',
}

export function* getInviteInfo({ payload: { query, success, fail } }) {
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

export function* getUserInfo({ payload: { query, success, fail } }) {
    const { data } = yield call(userCenterService.getUserInfo, query);
    if (data.error_code === 200) {
        success(data.data);
    } else {
        fail(data.error_code);
    }
    yield put({
        type: userCenterReducer.setUserInfo,
        payload: data.data.info
    });
    // yield put({
    //     type: loginReducer.setHistory,
    //     payload: data.data.info.login_history
    // });
}

export function* topFeeUpdate({ payload: { query, success, fail } }) {
    try {
        const { data } = yield call(userCenterService.topFeeUpdate, query);
        if (data.error_code === 200) {
            success(data.data);
        } else {
            fail(data.error_code);
        }
    } catch (error) {
        console.log(error);
    }
}

export default function* root() {
    yield [
        takeLatest(actionType.getInviteInfo, getInviteInfo),
        takeLatest(actionType.getUserInfo, getUserInfo),
        takeLatest(actionType.topFeeUpdate, topFeeUpdate),
    ];
}