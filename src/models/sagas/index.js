import { spawn } from 'redux-saga/effects';

import loginSaga from './login';
import tradeSaga from './trading';

export default function* rootSaga() {
  yield [
    spawn(loginSaga),
    spawn(tradeSaga),
  ];
}