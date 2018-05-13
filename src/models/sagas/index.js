import { spawn } from 'redux-saga/effects';

import loginSaga from './login';
import tradeSaga from './trading';
import register from './register';
import userCenter from './userCenter';

export default function* rootSaga() {
	yield [
		spawn(loginSaga),
		spawn(tradeSaga),
		spawn(register),
		spawn(userCenter)
	];
}
