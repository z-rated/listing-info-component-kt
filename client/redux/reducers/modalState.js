const modalStateReducer = (state = null, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return action.payload;
    default:
      return state;
  }
};

export default modalStateReducer;
