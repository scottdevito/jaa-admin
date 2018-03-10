import { combineReducers } from 'redux';
import LoginReducer from './login.R';

const rootReducer = combineReducers({
  loggedIn: LoginReducer,
});

export default rootReducer;
