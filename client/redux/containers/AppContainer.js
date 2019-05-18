import { connect } from 'react-redux';
import App from '../../components/App';
import updateData from '../actions/updateRestaurantDataAction';

const mapDispatchToProps = dispatch => ({
  updateData: (data) => {
    dispatch(updateData(data));
  },
});

const AppContainer = connect(null, mapDispatchToProps)(App);

export default AppContainer;
