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
          notif.localNotif(
            'sample.mp3',
            `Welcome ${ress.name}`,
            'Buy 2 free dessert for new users!',
            'https://source.unsplash.com/random/1024x500',
          );
        });
        setTimeout(() => {
          notif.localNotif(
            'sample.mp3',
            'Promo special Ramadan!',
            'Discounts up to 50% & Free Shipping ',
            'https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          );
        }, 50000);
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

      const notif = new NotifService(onRegister, () => {});
      const onRegister = (tokens) => {
        dispatch(setRegToken(tokens.token));

        dispatch(setRegFcm(true));
      };

      dispatch(setLoading(false));
      storeData('token', {value: token});
      storeData('userProfile', profile);
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
      getData('userProfile').then((ress) => {
        notif.localNotif(
          1,
          'sample.mp3',
          `Welcome back ${ress.name}!`,
          'What do you want to eat today?',
        );
      });
      setTimeout(() => {
        notif.localNotif(
          'sample.mp3',
          'Promo special Ramadan!',
          'Discounts up to 50% & Free Shipping ',
          'https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        );
      }, 50000);
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
