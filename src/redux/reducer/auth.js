const initialStateRegister = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  //   address: '',
  //   city: '',
  //   houseNumber: '',
  //   phoneNumber: '',
};

const initialStatePhoto = {
  uri: '',
  type: '',
  name: '',
  isUploadPhoto: false,
};

export const registerReducer = (state = initialStateRegister, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      name: action.value.name,
      email: action.value.email,
      password: action.value.password,
      password_confirmation: action.value.password,
    };
  }
  if (action.type === 'SET_ADDRESS') {
    return {
      ...state,
      address: action.value.address,
      city: action.value.city,
      houseNumber: action.value.houseNumber,
      phoneNumber: action.value.phoneNumber,
    };
  }
  return state;
};

export const photoReducer = (state = initialStatePhoto, action) => {
  if (action.type === 'SET_PHOTO') {
    return {
      ...state,
      uri: action.value.uri,
      type: action.value.type,
      name: action.value.name,
    };
  }
  if (action.type === 'SET_UPLOAD_STATUS') {
    return {
      ...state,
      isUploadPhoto: action.value.isUploadPhoto,
    };
  }
  return state;
};
