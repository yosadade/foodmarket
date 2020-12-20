import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Rating from '../Rating';

const ItemListFood = ({image, name, price, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}>
      <View style={styles.content}>
        <Image source={image} style={styles.image} />
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>IDR {price}</Text>
        </View>
      </View>
      <Rating />
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  content: {
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  subTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#8D92A3',
  },
});
