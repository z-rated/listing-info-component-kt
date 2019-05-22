import { connect } from 'react-redux';
import PhoneNumber from '../../components/PhoneNumber';

const mapStateToProps = state => ({
  data: state.data,
});

const PhoneNumberContainer = connect(mapStateToProps, null)(PhoneNumber);

export default PhoneNumberContainer;
