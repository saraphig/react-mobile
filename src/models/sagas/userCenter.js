import { takeLatest, call, put } from 'redux-saga/effects';

// reducer(action)
import { actionType as userCenterReducer } from '../reducers/userCenter';

// api接口
import * as userCenterService from 'api/userCenter';


const actionType = {
    setInfo: 'userCenter/setInfo'
}