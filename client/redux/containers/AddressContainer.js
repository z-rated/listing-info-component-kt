import { connect } from 'react-redux';
import Address from '../../components/Address';

const mapStateToProps = state => ({
  data: state.data,
});

const OpenStatusContainer = connect(mapStateToProps, null)(Address);

export default OpenStatusContainer;
