const initialOrderState = {
  orders: [],
  inProgress: [],
  pastOrders: [],
};

export const orderReducer = (state = initialOrderState, action) => {
  if (action.type === 'SET_ORDER') {
    return {
      ...state,
      orders: action.value,
    };
  }
  if (action.type === 'SET_IN_PROGRESS') {
    return {
      ...state,
      inProgress: action.value,
    };
  }
  if (action.type === 'SET_PAST_ORDERS') {
    return {
      ...state,
      pastOrders: action.value,
    };
  }
  return state;
};
