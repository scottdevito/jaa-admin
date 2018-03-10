import { connect } from 'react-redux';
import AdminConsole from '../components/admin-console/admin_console';
import {
  getWorkshopsData,
  getPodcastData,
  getMailingListData,
} from '../redux/actions/index';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  getWorkshopsData,
  getPodcastData,
  getMailingListData,
};

const AdminConsoleContainer = connect(mapStateToProps, mapDispatchToProps)(
  AdminConsole
);

export default AdminConsoleContainer;
