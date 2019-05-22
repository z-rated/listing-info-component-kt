const timeListReducer = (state = null, action) => {
  switch (action.type) {
    case 'TOGGLE_TIME_LIST':
      return action.payload;
    default:
      return state;
  }
};

export default timeListReducer;
