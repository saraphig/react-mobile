import { combineReducers } from 'redux';

import userCenterReducer from './userCenter';
import loginReducer from './login';

const rootReducer = combineReducers({
  userCenter: userCenterReducer,
  login: loginReducer
});

export default rootReducer;