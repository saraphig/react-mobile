import { spawn } from 'redux-saga/effects';

import loginSaga from './login';
import tradeSaga from './trading';
import register from './register';

export default function* rootSaga() {
  yield [
    spawn(loginSaga),
    spawn(tradeSaga),
    spawn(register),
  ];
}