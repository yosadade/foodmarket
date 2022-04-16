const initialGlobalState = {
  isError: false,
  isLoading: false,
  message: 'error',
  registerToken: '',
  fcmRegistered: '',
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
  if (action.type === 'SET_REG_TOKEN') {
    return {
      ...state,
      registerToken: action.value,
    };
  }
  if (action.type === 'SET_REG_FCM') {
    return {
      ...state,
      fcmRegistered: action.value,
    };
  }
  return state;
};
