import Axios from 'axios';
import {getData, NotifService, showMessage, storeData} from '../../utils';
import {setLoading} from './global';
import {API_HOST} from '../../config';
import {setRegFcm, setRegToken} from '.';

export const signUpAction =
  (dataRegister, photoReducer, navigation) => (dispatch) => {
    Axios.post(`${API_HOST.uri}/register`, dataRegister)
      .then((res) => {
        const profile = res.data.data.user;
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`;

        const onRegister = (tokens) => {
          dispatch(setRegToken(tokens.token));

          dispatch(setRegFcm(true));
        };

        const notif = new NotifService(onRegister, () => {});

        storeData('token', {
          value: token,
        });
        if (photoReducer.isUploadPhoto) {
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);
          Axios.post(`${API_HOST.uri}/photo`, photoForUpload, {
            headers: {
              Authorization: token,
              'Content-Type': 'multipart/form-data',
            },
          })
            .then((resUpload) => {
              profile.profile_photo_url = `http://foodmarket-backend.buildwithangga.id/storage/${resUpload.data.data[0]}`;
              storeData('userProfile', profile);
              navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
            })
            .catch(() => {
              showMessage('Upload photo tidak berhasil');
              navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
            });
        } else {
          storeData('userProfile', profile);
          navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
        }
        dispatch(setLoading(false));
        getData('userProfile').then((ress) => {
          notif.localNotif('sample.mp3', ress.name);
        });
      })
      .catch((err) => {
        dispatch(setLoading(false));

        showMessage(err.response.data.message);
      });
  };

export const signInAction = (form, navigation) => (dispatch) => {
  dispatch(setLoading(true));
  Axios.post(`${API_HOST.uri}/login`, form)
    .then((res) => {
      const profile = res.data.data.user;
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;

      dispatch(setLoading(false));
      storeData('token', {value: token});
      storeData('userProfile', profile);
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch((err) => {
      dispatch(setLoading(false));
      showMessage(
        err.response.data.message
          ? err.response.data.message
          : err.response.data.data.message,
      );
    });
};
