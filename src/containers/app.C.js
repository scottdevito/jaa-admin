import { connect } from 'react-redux';
import App from '../App';
import { Login } from '../redux/actions/index';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  Login,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
