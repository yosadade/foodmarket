import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {FoodDummy9, ICBackWhite} from '../../assets';
import {Rating, Button, Counter} from '../../components';

const FoodDetail = ({navigation}) => {
  const [count, setCount] = useState(0);

  const onHandleBack = () => {
    navigation.goBack();
  };

  const onHandleCountMin = () => {
    count <= 0 ? setCount(count) : setCount(count - 1);
  };

  const onHandleCountPlus = () => {
    setCount(count + 1);
  };
  return (
    <View style={styles.page}>
      <ImageBackground source={FoodDummy9} style={styles.cover}>
        <TouchableOpacity style={styles.back} onPress={onHandleBack}>
          <ICBackWhite />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>Cherry Healthy</Text>
              <Rating />
            </View>
            <Counter
              count={count}
              onPressMin={onHandleCountMin}
              onPressPlus={onHandleCountPlus}
            />
          </View>

          <Text style={styles.desc}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>

          <Text style={styles.label}>Ingridients:</Text>
          <Text style={styles.desc}>Seledri, telur, blueberry, madu</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelPrice}>Total Price:</Text>
            <Text>IDR 720.000</Text>
          </View>
          <View style={styles.button}>
            <Button title="Order Now" />
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
    backgroundColor: '#FFFFFF',
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
    color: '#020202',
    marginBottom: 6,
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
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
    color: '#8D92A3',
  },
  button: {
    width: 163,
    // flex: 1,
  },
  price: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
