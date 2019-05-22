import { connect } from 'react-redux';
import Website from '../../components/Website';

const mapStateToProps = state => ({
  data: state.data,
});

const WebsiteContainer = connect(mapStateToProps, null)(Website);

export default WebsiteContainer;
