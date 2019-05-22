import { createStore } from 'redux';
import rootReducer from '../reducers/main';

const initialState = {
  timeListIsOpen: false,
  modalIsOpen: false,
  data: null,
};

const store = createStore(rootReducer, initialState);

export default store;
