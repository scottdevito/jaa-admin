import { connect } from 'react-redux';
import App from '../App';
import { login } from '../redux/actions/index';

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = {
  login,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
