import { combineReducers } from 'redux';
import LoginReducer from './login.R';
import WorkshopsReducer from './workshops.R';
import EpisodesReducer from './episodes.R';

const rootReducer = combineReducers({
  loggedIn: LoginReducer,
  workshopsData: WorkshopsReducer,
  podcastData: EpisodesReducer,
});

export default rootReducer;
