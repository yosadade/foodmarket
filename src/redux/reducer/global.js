const initialGlobalState = {
  isError: false,
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
  return state;
};
