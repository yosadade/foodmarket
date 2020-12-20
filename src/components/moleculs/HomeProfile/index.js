import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const HomeProfile = ({image}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.appName}>Foodmarket</Text>
        <Text style={styles.desc}>Let's get some foods</Text>
      </View>
      <Image source={image} style={styles.photoProfile} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: '#FFFFFF',
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  photoProfile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});
