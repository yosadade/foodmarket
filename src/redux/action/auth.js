import Axios from 'axios';
import {showMessage} from '../../utils';
import {setLoading} from './global';

const API_HOST = {
  uri: 'http://foodmarket-backend.buildwithangga.id/api',
};

export const signUpAction = (dataRegister, photoReducer, navigation) => (
  dispatch,
) => {
  Axios.post(`${API_HOST.uri}/register`, dataRegister)
    .then((res) => {
      console.log('data success', res.data);
      if (photoReducer.isUploadPhoto) {
        const photoForUpload = new FormData();
        photoForUpload.append('file', photoReducer);
        Axios.post(`${API_HOST}/photo`, photoForUpload, {
          headers: {
            Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
            'Content-Type': 'multipart/form-data',
          },
        })
          .then((resUpload) => {
            console.log('succes upload', resUpload);
          })
          .catch(() => {
            showMessage('Upload photo tidak berhasil');
          });
      }
      dispatch(setLoading(false));
      showMessage('Register Success', 'success');
      navigation.replace('SuccessSignUp');
    })
    .catch((err) => {
      dispatch(setLoading(false));
      console.log('Sign Up Error', err.response.data.message);
      showMessage(err.response.data.message);
    });
};
