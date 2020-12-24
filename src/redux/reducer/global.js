const initialGlobalState = {
  isError: false,
  isLoading: false,
  message: 'error',
};

export const globalReducer = (state = initialGlobalState, action) => {
  if (action.type === 'SET_ERROR') {
    return {
      ...state,
      isError: action.value.isError,
      message: action.value.message,
    };
  }
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      isLoading: action.value,
    };
  }
  return state;
};
