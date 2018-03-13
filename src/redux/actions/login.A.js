import firebase from 'firebase';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_PERSIST, LOGOUT } from './types';

const login = (user, password) => {
  return async dispatch => {
    try {
      const data = await firebase
        .auth()
        .signInWithEmailAndPassword(user, password);

      dispatch(loginSuccess(data));
    } catch (error) {
      // Login Fail
      dispatch(loginFail(error));
    }
  };
};

const loginSuccess = data => {
  return dispatch => {
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  };
};

const loginFail = error => {
  return dispatch => {
    dispatch({ type: LOGIN_FAIL, payload: error });
    console.error(error);
  };
};

const loginPersist = user => {
  return dispatch => {
    dispatch({ type: LOGIN_PERSIST });
    dispatch(loginSuccess(user));
  };
};

const logout = () => {
  return dispatch => {
    dispatch({ type: LOGOUT });
  };
};

export { login, loginPersist, logout };
