import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {ICBackWhite} from '../../assets';
import {Rating, Button, Counter, Numbers} from '../../components';
import {colors, getData} from '../../utils';

const FoodDetail = ({navigation, route}) => {
  const {name, picturePath, description, ingredients, rate, price, id} =
    route.params;
  const [totalItem, setTotalItem] = useState(1);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then((res) => {
      setUserProfile(res);
    });
  }, []);

  const onCounterChange = (value) => {
    setTotalItem(value);
  };

  const onOrder = () => {
    const totalPrice = totalItem * price;
    const driver = 50000;
    const tax = (10 / 100) * totalPrice;
    const total = totalPrice + driver + tax;

    const data = {
      item: {
        name: name,
        price: price,
        picturePath: picturePath,
        id: id,
      },
      transaction: {
        totalItem: totalItem,
        totalPrice: totalItem * price,
        driver: driver,
        tax: tax,
        total: total,
      },
      userProfile,
    };

    navigation.navigate('OrderSummary', data);
  };

  return (
    <View style={styles.page}>
      <ImageBackground source={{uri: picturePath}} style={styles.cover}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <ICBackWhite />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>{name}</Text>
              <Rating number={rate} />
            </View>
            <Counter onValueChange={onCounterChange} />
          </View>

          <Text style={styles.desc}>{description}</Text>

          <Text style={styles.label}>Ingridients:</Text>
          <Text style={styles.desc}>{ingredients}</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelPrice}>Total Price:</Text>
            <Numbers number={totalItem * price} style={styles.priceTotal} />
          </View>
          <View style={styles.button}>
            <Button title="Order Now" onPress={onOrder} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  cover: {
    height: 330,
  },
  back: {
    width: 30,
    height: 30,
    marginTop: 24,
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: colors.black,
    marginBottom: 6,
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.grey,
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.black,
    marginBottom: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 17,
  },
  priceContainer: {
    flex: 1,
  },
  labelPrice: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: colors.grey,
  },
  priceTotal: {
    fontFamily: 'Poppins-Regular',
    color: colors.black,
  },
  button: {
    width: 163,
    // flex: 1,
  },
  price: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: colors.black,
  },
});
