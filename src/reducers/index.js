import { combineReducers } from 'redux';
import authReducer from './auth'

const rootReducer = combineReducers({
  authenticated: authReducer
});

export default rootReducer;
