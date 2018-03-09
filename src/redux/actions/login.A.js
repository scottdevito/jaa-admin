import firebase from 'firebase';
import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';

const Login = () => {
  return async dispatch => {
    try {
      const data = await firebase
        .auth()
        .signInWithEmailAndPassword(user, password);
      dispatch(LoginSuccess(data));
    } catch (error) {
      // Login Fail
      dispatch(LoginFail(error));
    }
  };
};

const LoginSuccess = data => {
  return dispatch => {
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  };
};

const LoginFail = error => {
  return dispatch => {
    dispatch({ type: LOGIN_FAIL, payload: error });
    console.error(error);
  };
};

// const loginPersist = user => {
//   return dispatch => {
//     dispatch({ type: LOGIN_SUCCESS, payload: { user } });
//     dispatch({ type: SET_USER_AUTH_INFO, payload: { user } });
//     dispatch(setUserDbInfo(user.email));
//     dispatch(fetchBelts());
//     dispatch(fetchBeltImages());
//   };
// };

export { Login };
