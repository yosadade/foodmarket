import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {ProfileTabSection} from '../../components';
import {getData, showMessage, storeData} from '../../utils';
import Axios from 'axios';
import {API_HOST} from '../../config';

const Profie = () => {
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    updateUserProfile();
  }, []);

  const updateUserProfile = () => {
    getData('userProfile')
      .then((res) => {
        setUserProfile(res);
      })
      .catch(() => {});
  };

  const updatePhoto = () => {
    launchImageLibrary(
      {
        quality: 0.5,
        maxWidth: 200,
        maxHeight: 200,
      },
      (response) => {
        if (response.didCancel || response.error) {
          showMessage('Anda tidak memilih photo');
        } else {
          // const source = {uri: response.uri};
          const dataImage = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          };
          const photoForUpload = new FormData();
          photoForUpload.append('file', dataImage);
          getData('token').then((resToken) => {
            Axios.post(`${API_HOST.uri}/user/photo`, photoForUpload, {
              headers: {
                Authorization: resToken.value,
                'Content-Type': 'multipart/form-data',
              },
            })
              .then((res) => {
                getData('userProfile').then((resUser) => {
                  showMessage('Update Photo Berhasil', 'success');
                  resUser.profile_photo_url = `http://foodmarket-backend.buildwithangga.id/storage/${res.data.data[0]}`;
                  storeData('userProfile', resUser).then(() => {
                    updateUserProfile();
                  });
                });
              })
              .catch((err) => {
                showMessage(err?.response?.message || 'Terjadi Kesalahan');
              });
          });
        }

        // setPhoto(source)
        // dispatch({type: 'SET_PHOTO', value: dataImage})
        // dispatch({type: 'SET_UPLOAD_STATUS', value: true})
      },
    );
  };

  return (
    <View style={styles.page}>
      <View style={styles.photo}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.borderPhoto}
          onPress={updatePhoto}>
          <Image
            source={{uri: userProfile.profile_photo_url}}
            style={styles.photoContainer}
          />
        </TouchableOpacity>
        <Text style={styles.name}>{userProfile.name}</Text>
        <Text style={styles.email}>{userProfile.email}</Text>
      </View>
      <ProfileTabSection />
    </View>
  );
};

export default Profie;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  photo: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    paddingVertical: 26,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    padding: 24,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  name: {
    fontSize: 18,
    marginTop: 16,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  email: {
    fontSize: 14,
    marginTop: 6,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
});
