import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILSuccessOrder} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessOrder = ({navigation}) => {
  const onHandleOtherFoods = () => {
    navigation.replace('MainApp');
  };
  const onHandleMyOrder = () => {
    navigation.replace('Order');
  };
  return (
    <View style={styles.page}>
      <ILSuccessOrder />
      <Text style={styles.title}>You’ve Made Order</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Just stay at home while we are</Text>
      <Text style={styles.subTitle}>preparing your best foods</Text>
      <Gap height={30} />
      <View style={styles.btnContainer}>
        <Button
          title="Order Other Foods"
          color="#020202"
          onPress={onHandleOtherFoods}
        />
      </View>
      <Gap height={12} />
      <View style={styles.btnContainer}>
        <Button
          title="View My Order"
          bgColor="#8D92A3"
          color="#FFFFFF"
          onPress={onHandleMyOrder}
        />
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    marginTop: 30,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  btnContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
