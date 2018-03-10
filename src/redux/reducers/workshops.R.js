import { GET_WORKSHOPS_SUCCESS, GET_WORKSHOPS_FAIL } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_WORKSHOPS_SUCCESS:
      return Object.assign(...state, action.payload);
    case GET_WORKSHOPS_FAIL:
      return state;
    default:
      return state;
  }
}
