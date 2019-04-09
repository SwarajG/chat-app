import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateReceiverId } from '../../actions';
import ContactNameButtonView from '../../components/ContactNameButtonView';

const mapStateToProps = (state, ownProps) => ({
  isActive: state.activeReceiverId === ownProps.user.id,
  ...ownProps
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateReceiverId
}, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactNameButtonView);