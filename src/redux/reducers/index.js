import { combineReducers } from 'redux';
import LoginReducer from './login.R';
import WorkshopsReducer from './workshops.R';
import EpisodesReducer from './episodes.R';
import MailingListReducer from './mailing_list.R';
import EmailReducer from './email.R';

const rootReducer = combineReducers({
  loggedIn: LoginReducer,
  workshopsData: WorkshopsReducer,
  podcastData: EpisodesReducer,
  mailingListData: MailingListReducer,
  email: EmailReducer,
});

export default rootReducer;
