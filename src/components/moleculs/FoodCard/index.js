import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Rating} from '..';
import {colors} from '../../../utils';

const FoodCard = ({image, name, rating, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.rating}>
          <View style={styles.star}>
            <Rating number={rating} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginRight: 24,
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
    color: colors.black,
  },
  rating: {
    flexDirection: 'row',
  },
  star: {
    flexDirection: 'row',
    marginRight: 4,
  },
});
