import { connect } from 'react-redux';
import AdminConsole from '../components/admin-console/admin_console';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

const AdminConsoleContainer = connect(mapStateToProps, mapDispatchToProps)(
  AdminConsole
);

export default AdminConsoleContainer;
