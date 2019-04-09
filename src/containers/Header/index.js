import { connect } from 'react-redux';
import HeaderView from '../../components/HeaderView';

// TODO: It's hard coded, because assuming data is for only one user and it's value is fixed, need to update for future
const mapStateToProps = (state) => ({
  name: 'Swaraj'
});

export default connect(mapStateToProps)(HeaderView);