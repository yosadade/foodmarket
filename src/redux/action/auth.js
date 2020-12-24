import Axios from 'axios';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';

const API_HOST = {
  uri: 'http://foodmarket-backend.buildwithangga.id/api',
};

export const signUpAction = (dataRegister, photoReducer, navigation) => (
  dispatch,
) => {
  Axios.post(`${API_HOST.uri}/register`, dataRegister)
    .then((res) => {
      const profile = res.data.data.user;
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      // data user
      storeData('userProfile', profile);
      // data token
      storeData('token', {
        value: token,
      });
      if (photoReducer.isUploadPhoto) {
        const photoForUpload = new FormData();
        photoForUpload.append('file', photoReducer);
        Axios.post(`${API_HOST}/photo`, photoForUpload, {
          headers: {
            Authorization: token,
            'Content-Type': 'multipart/form-data',
          },
        }).catch(() => {
          showMessage('Upload photo tidak berhasil');
        });
      }
      dispatch(setLoading(false));
      navigation.replace('SuccessSignUp');
    })
    .catch((err) => {
      dispatch(setLoading(false));
      console.log('Sign Up Error', err.response.data.message);
      showMessage(err.response.data.message);
    });
};
