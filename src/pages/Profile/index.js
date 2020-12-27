import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ProfileTabSection} from '../../components';
import {getData} from '../../utils';

const Profie = () => {
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    getData('userProfile')
      .then((res) => {
        console.log(res.profile_photo_url);
        setUserProfile(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <View style={styles.page}>
      <View style={styles.photo}>
        <View style={styles.borderPhoto}>
          <Image
            source={{uri: userProfile.profile_photo_url}}
            style={styles.photoContainer}
          />
        </View>
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
