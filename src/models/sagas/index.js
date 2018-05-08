import { spawn } from 'redux-saga/effects';

import loginSaga from './login';

export default function* rootSaga() {
  yield [
    spawn(loginSaga),
  ];
}