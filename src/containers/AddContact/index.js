import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateContactText, addNewContact, clearName } from '../../actions';
import AddContactView from '../../components/AddContactView';

const mapStateToProps = (state) => ({
  value: state.contactText
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateContactText,
  addNewContact,
  clearName
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContactView);