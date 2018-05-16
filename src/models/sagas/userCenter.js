import { takeLatest, call, put } from 'redux-saga/effects';

// reducer(action)
import { actionType as userCenterReducer } from 'models/reducers/userCenter';

// api接口
import * as userCenterApi from 'api/userCenter';

export const actionType = {
    getInviteInfo:'userCenter/getInviteInfo',
    getUserInfo: 'userCenter/getUserInfo',
    topFeeUpdate: 'userCenter/topFeeUpdate',
    setMyCoinAccount: 'userCenter/coinAccount',
}

export function* getInviteInfo({ payload: { query, success, fail } }) {
	// const { data } = yield call(userCenterService.inviteInfo, query);
	// if (!data.error) {
	// 	success(data.result);
	// } else {
	// 	fail(data.error);
	// }
	try {
		const { data } = yield call(userCenterApi.inviteInfo, query);
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
    const { data } = yield call(userCenterApi.getUserInfo, query);
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
        const { data } = yield call(userCenterApi.topFeeUpdate, query);
        if (data.error_code === 200) {
            success(data.data);
        } else {
            fail(data.error_code);
        }
    } catch (error) {

    }
}

// 获取资产总值
export function* setMyCoinAccount({ payload: { query } }) {
    yield put({ type: userCenterReducer.setMyCoinAccount, query });
}

export default function* root() {
    yield [
        takeLatest(actionType.getInviteInfo, getInviteInfo),
        takeLatest(actionType.getUserInfo, getUserInfo),
        takeLatest(actionType.topFeeUpdate, topFeeUpdate),
        takeLatest(actionType.setMyCoinAccount, setMyCoinAccount),
    ];
}
