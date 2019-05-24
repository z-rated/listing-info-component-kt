/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import modalStateReducer from '../client/redux/reducers/modalState';
import timeListReducer from '../client/redux/reducers/timeListState';
import restaurantDataReducer from '../client/redux/reducers/restaurantData';
let initialState;

beforeEach(() => {
  initialState = {
    timeListIsOpen: false,
    modalIsOpen: false,
    data: null,
  };
});

describe('Modal State Reducer', () => {
  it('should return proper payload', () => {
    const action = {
      type: 'TOGGLE_MODAL',
      payload: true,
    };

    const afterState = modalStateReducer(initialState, action);

    expect(afterState).toEqual(true);
  });

  it('should return initial state if invalid action provided', () => {
    const action = {
      type: 'INCORRECT_ACTION',
      payload: true,
    };

    const afterState = modalStateReducer(initialState, action);

    expect(afterState).toEqual(initialState);
  });

  it('should return null if invalid action provided and no state provided', () => {
    const action = {
      type: 'INCORRECT_ACTION',
      payload: true,
    };

    const afterState = modalStateReducer(undefined, action);

    expect(afterState).toEqual(null);
  });
});

describe('Time List State Reducer', () => {
  it('should return proper payload', () => {
    const action = {
      type: 'TOGGLE_TIME_LIST',
      payload: true,
    };

    const afterState = timeListReducer(initialState, action);

    expect(afterState).toEqual(true);
  });

  it('should return initial state if invalid action provided', () => {
    const action = {
      type: 'INCORRECT_ACTION',
      payload: true,
    };

    const afterState = timeListReducer(initialState, action);

    expect(afterState).toEqual(initialState);
  });

  it('should return null if invalid action provided and no state provided', () => {
    const action = {
      type: 'INCORRECT_ACTION',
      payload: true,
    };

    const afterState = timeListReducer(undefined, action);

    expect(afterState).toEqual(null);
  });
});

describe('Restaurant Data Reducer', () => {
  it('should return proper payload', () => {
    const action = {
      type: 'UPDATE_DATA',
      payload: data,
    };

    let afterState = restaurantDataReducer(initialState, action);

    expect(afterState).toEqual(data);
  });

  it('should return initial state if invalid action provided', () => {
    const action = {
      type: 'INCORRECT_ACTION',
      payload: true,
    };

    const afterState = restaurantDataReducer(initialState, action);

    expect(afterState).toEqual(initialState);
  });

  it('should return null if invalid action provided and no state provided', () => {
    const action = {
      type: 'INCORRECT_ACTION',
      payload: true,
    };

    const afterState = restaurantDataReducer(undefined, action);

    expect(afterState).toEqual(null);
  });
});

// describe('Time List Reducer', () => {
//   it('should return proper payload', () => {
//     const testData = data;
//     const actionResult = updateRestaurantData(testData);
//     const expected = {
//       type: 'UPDATE_DATA',
//       payload: testData,
//     }

//     expect(actionResult).toEqual(expected);
//   });
