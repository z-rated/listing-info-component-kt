import { connect } from 'react-redux';
import Map from '../../components/Map';
import toggleModal from '../actions/modalAction';

const mapStateToProps = state => ({
  modalIsOpen: state.modalIsOpen,
  data: state.data,
});

const mapDispatchToProps = dispatch => ({
  toggleModal: (modalIsOpen) => {
    dispatch(toggleModal(modalIsOpen));
  },
});

const MapContainer = connect(mapStateToProps, mapDispatchToProps)(Map);

export default MapContainer;
