const initialStateHome = {
  food: [],
};

export const homeReducer = (state = initialStateHome, action) => {
  if (action.type === 'SET_FOOD') {
    return {
      ...state,
      food: action.value,
    };
  }
  return state;
};
