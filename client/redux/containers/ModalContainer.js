import { connect } from 'react-redux';
import Modal from '../../components/Modal';
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

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default ModalContainer;
