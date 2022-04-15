import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ICStarOn, ICStarOff} from '../../../assets';
import {colors} from '../../../utils';
import Numbers from '../Numbers';

const Rating = ({number}) => {
  const renderStar = () => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= number) {
        star.push(<ICStarOn key={i} />);
      } else {
        star.push(<ICStarOff key={i} />);
      }
    }
    return star;
  };
  return (
    <View style={styles.container}>
      <View style={styles.starContainer}>{renderStar()}</View>
      <Numbers number={number} type="decimal" style={styles.title} />
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
    alignItems: 'center',
    marginRight: 4,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.grey,
    marginTop: 2,
  },
});
