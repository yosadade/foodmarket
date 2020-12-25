import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {FoodDummy1} from '../../../assets/dummy';
import {ICStarOn, ICStarOff} from '../../../assets';
import {Rating} from '..';

const FoodCard = ({image, name, rating}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.rating}>
          {/* <View style={styles.star}> */}
          <Rating number={rating} />
          {/* </View> */}
        </View>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginRight: 24,
    // tidak boleh ada konten yang melebihi card
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    elevation: 14,
  },
  image: {
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  rating: {
    flexDirection: 'row',
  },
  star: {
    flexDirection: 'row',
    marginRight: 4,
  },
});
