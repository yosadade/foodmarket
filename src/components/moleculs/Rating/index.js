import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICStarOn, ICStarOff} from '../../../assets';

const Rating = ({number}) => {
  const renderStar = () => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= number) {
        star.push(<ICStarOn />);
      } else {
        star.push(<ICStarOff />);
      }
    }
    return star;
  };
  return (
    <View style={styles.container}>
      <View style={styles.starContainer} />
      {renderStar()}
      <Text style={styles.title}>{number}</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  starContainer: {
    flexDirection: 'row',
    // marginRight: 4,
  },
  title: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginLeft: 4,
  },
});
