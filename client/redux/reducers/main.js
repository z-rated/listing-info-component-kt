import { combineReducers } from 'redux';
import modalIsOpen from './modalState';
import timeListIsOpen from './timeListState';
import data from './restaurantData';

const rootReducer = combineReducers({
  modalIsOpen,
  timeListIsOpen,
  data,
});

export default rootReducer;
