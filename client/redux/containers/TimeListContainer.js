import { connect } from 'react-redux';
import TimeList from '../../components/TimeList';
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

const TimeListContainer = connect(mapStateToProps, mapDispatchToProps)(TimeList);

export default TimeListContainer;
