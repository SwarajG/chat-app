import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMessageInput, sendMessage, clearMessageInput } from '../../actions';
import ChatWindowView from '../../components/ChatWindowView';
import { getUserChat } from '../../selectors';

const mapStateToProps = state => ({
  messages: getUserChat(state),
  value: state.messageText,
  receiverId: state.activeReceiverId
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateMessageInput,
  sendMessage,
  clearMessageInput
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindowView);