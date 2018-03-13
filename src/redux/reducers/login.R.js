import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/types';

export default function(state = false, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign(...state, true);
    case LOGIN_FAIL:
      return Object.assign(...state, false);
    case LOGOUT:
      return Object.assign(...state, false);
    default:
      return state;
  }
}
