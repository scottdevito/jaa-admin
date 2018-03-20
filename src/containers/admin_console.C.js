import { connect } from 'react-redux';
import AdminConsole from '../components/admin-console/admin_console';
import {
  getWorkshopsData,
  getPodcastData,
  getMailingListData,
  addNewEpisode,
  addNewWorkshop,
} from '../redux/actions/index';

const mapStateToProps = state => {
  return {
    email: state.email,
    mailingListData: state.mailingListData,
  };
};

const mapDispatchToProps = {
  getWorkshopsData,
  getPodcastData,
  getMailingListData,
  addNewEpisode,
  addNewWorkshop,
};

const AdminConsoleContainer = connect(mapStateToProps, mapDispatchToProps)(
  AdminConsole
);

export default AdminConsoleContainer;
