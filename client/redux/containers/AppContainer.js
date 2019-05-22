import { connect } from 'react-redux';
import App from '../../components/App';
import updateData from '../actions/updateRestaurantDataAction';

const mapStateToProps = state => ({
  modalIsOpen: state.modalIsOpen,
});

const mapDispatchToProps = dispatch => ({
  updateData: (data) => {
    dispatch(updateData(data));
  },
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
