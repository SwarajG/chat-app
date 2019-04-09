import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateReceiverId } from '../../actions';
import ContactListView from '../../components/ContactListView';

const mapStateToProps = (state) => ({
  userList: state.userList,
  activeReceiverId: state.activeReceiverId
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateReceiverId
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactListView);