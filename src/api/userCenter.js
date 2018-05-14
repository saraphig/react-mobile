import request from 'utils/request';

// 我的邀请
export function inviteInfo(query) {
	return request({
		url: '/api/inviteInfo',
		method: 'post',
		data: query
	});
}
export function getUserInfo(query) {
	return request({
		url: '/api/info',
		method: 'post',
		data: query
	});
}
