const initialStateHome = {
  food: [],
  newTaste: [],
  popular: [],
  recommended: [],
};

export const homeReducer = (state = initialStateHome, action) => {
  if (action.type === 'SET_FOOD') {
    return {
      ...state,
      food: action.value,
    };
  }
  if (action.type === 'SET_NEW_TASTE') {
    return {
      ...state,
      newTaste: action.value,
    };
  }
  if (action.type === 'SET_POPULAR') {
    return {
      ...state,
      popular: action.value,
    };
  }
  if (action.type === 'SET_RECOMMENDED') {
    return {
      ...state,
      recommended: action.value,
    };
  }
  return state;
};
