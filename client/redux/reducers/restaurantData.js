const restaurantDataReducer = (state = null, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return action.payload;
    default:
      return state;
  }
};

export default restaurantDataReducer;
