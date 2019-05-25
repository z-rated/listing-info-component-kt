import { connect } from 'react-redux';
import OpenStatus from '../../components/OpenStatus';
import toggleTimeList from '../actions/timeListAction';

const mapStateToProps = state => ({
  timeListIsOpen: state.timeListIsOpen,
  data: state.data,
});

const mapDispatchToProps = dispatch => ({
  toggleTimeList: (timeListIsOpen) => {
    dispatch(toggleTimeList(timeListIsOpen));
  },
});

const OpenStatusContainer = connect(mapStateToProps, mapDispatchToProps)(OpenStatus);

export default OpenStatusContainer;
