import { connect } from 'react-redux';
import Address from '../../components/Address';
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

const OpenStatusContainer = connect(mapStateToProps, mapDispatchToProps)(Address);

export default OpenStatusContainer;
