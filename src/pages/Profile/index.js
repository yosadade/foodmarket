import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ProfileDummy} from '../../assets';
import {ProfileTabSection} from '../../components';

const Profie = () => {
  return (
    <View style={styles.page}>
      <View style={styles.photo}>
        <View style={styles.borderPhoto}>
          <Image source={ProfileDummy} style={styles.photoContainer} />
        </View>
        <Text style={styles.name}>Yosada Dede</Text>
        <Text style={styles.email}>yosadadede.qodr@gmail.com</Text>
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
