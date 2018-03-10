import {
  GET_MAILING_LIST_SUCCESS,
  GET_MAILING_LIST_FAIL,
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_MAILING_LIST_SUCCESS:
      return Object.assign(...state, action.payload);
    case GET_MAILING_LIST_FAIL:
      return state;
    default:
      return state;
  }
}
