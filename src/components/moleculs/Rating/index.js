import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICStarOn, ICStarOff} from '../../../assets';

const Rating = () => {
  return (
    <View style={styles.container}>
      <ICStarOn />
      <ICStarOn />
      <ICStarOn />
      <ICStarOn />
      <ICStarOff />
      <Text style={styles.title}>4.7</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginLeft: 4,
  },
});
