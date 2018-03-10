import { GET_EPISODES_SUCCESS, GET_EPISODES_FAIL } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_EPISODES_SUCCESS:
      return Object.assign(...state, action.payload);
    case GET_EPISODES_FAIL:
      return state;
    default:
      return state;
  }
}
