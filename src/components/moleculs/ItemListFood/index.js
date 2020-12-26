import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Rating from '../Rating';
import Numbers from '../Numbers';

const ItemListFood = ({
  image,
  name,
  price,
  onPress,
  item,
  orderItems,
  totalOrder,
  type,
  date,
  status,
  rating,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={styles.content}>
              <Image source={image} style={styles.image} />
              <View>
                <Text style={styles.title}>{name}</Text>
                <Numbers number={price} style={styles.titlePrice} />
              </View>
            </View>
            <Rating number={rating} />
          </>
        );
      case 'order-summary':
        return (
          <>
            <View style={styles.content}>
              <Image source={image} style={styles.image} />
              <View>
                <Text style={styles.title}>{name}</Text>
                <Numbers number={price} style={styles.titlePrice} />
                <Text style={styles.subTitle}>IDR {price}</Text>
              </View>
            </View>
            <Text style={styles.subTitle}>{item} items</Text>
          </>
        );
      case 'in-progress':
        return (
          <>
            <View style={styles.content}>
              <Image source={image} style={styles.image} />
              <View>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>
                  {orderItems} items . IDR {totalOrder}
                </Text>
              </View>
            </View>
          </>
        );
      case 'past-orders':
        return (
          <>
            <View style={styles.content}>
              <Image source={image} style={styles.image} />
              <View>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>
                  {orderItems} items . IDR {totalOrder}
                </Text>
              </View>
            </View>
            <View style={styles.statusContainer}>
              <Text style={styles.date}>{date}</Text>
              {status ? <Text style={styles.status}>{status}</Text> : null}
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={styles.content}>
              <Image source={image} style={styles.image} />
              <View>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>IDR {price}</Text>
              </View>
            </View>
            <Rating />
          </>
        );
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}>
      {renderContent()}
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
    paddingVertical: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  titlePrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#8D92A3',
    // color: '#020202',
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
  statusContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  date: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  status: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#D9435E',
  },
});
