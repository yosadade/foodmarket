import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {ProfileTabSection} from '../../components';
import {colors, getData, showMessage, storeData} from '../../utils';
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
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    paddingVertical: 26,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: colors.grey,
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
    backgroundColor: colors.white2,
    justifyContent: 'center',
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: colors.grey,
    textAlign: 'center',
  },
  name: {
    fontSize: 18,
    marginTop: 16,
    fontFamily: 'Poppins-Medium',
    color: colors.black,
  },
  email: {
    fontSize: 14,
    marginTop: 6,
    fontFamily: 'Poppins-Light',
    color: colors.grey,
  },
});
