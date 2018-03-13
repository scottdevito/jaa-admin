import { connect } from 'react-redux';
import App from '../App';
import { login, loginPersist, logout } from '../redux/actions/index';

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = {
  login,
  loginPersist,
  logout,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
