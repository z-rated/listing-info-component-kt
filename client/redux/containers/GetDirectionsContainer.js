import { connect } from 'react-redux';
import GetDirections from '../../components/GetDirections';

const mapStateToProps = state => ({
  data: state.data,
});

const GetDirectionsContainer = connect(mapStateToProps, null)(GetDirections);

export default GetDirectionsContainer;
