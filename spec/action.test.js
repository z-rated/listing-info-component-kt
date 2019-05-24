/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import toggleTimeList from '../client/redux/actions/timeListAction';
import toggleModal from '../client/redux/actions/modalAction';
import updateRestaurantData from '../client/redux/actions/updateRestaurantDataAction';

describe('toggleTimeList Action Creator', () => {
  it('should return proper payload', () => {
    const actionResult = toggleTimeList(true);
    const expected = {
      type: 'TOGGLE_TIME_LIST',
      payload: true,
    }

    expect(actionResult).toEqual(expected);
  });
});

describe('toggleModal Action Creator', () => {
  it('should return proper payload', () => {
    const actionResult = toggleModal(true);
    const expected = {
      type: 'TOGGLE_MODAL',
      payload: true,
    };

    expect(actionResult).toEqual(expected);
  });
});

describe('updateRestaurantData Action Creator', () => {
  it('should return proper payload', () => {
    const testData = data;
    const actionResult = updateRestaurantData(testData);
    const expected = {
      type: 'UPDATE_DATA',
      payload: testData,
    }

    expect(actionResult).toEqual(expected);
  });
});
