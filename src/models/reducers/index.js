import { combineReducers } from 'redux';

import userCenterReducer from './userCenter';
import loginReducer from './login';
import tradeReducer from './trading';

const rootReducer = combineReducers({
  userCenter: userCenterReducer,
  login: loginReducer,
  trade: tradeReducer
});

export default rootReducer;