import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILSuccessOrder} from '../../assets';
import {Button, Gap} from '../../components';
import {colors} from '../../utils';

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
          color={colors.black}
          onPress={onHandleOtherFoods}
        />
      </View>
      <Gap height={12} />
      <View style={styles.btnContainer}>
        <Button
          title="View My Order"
          bgColor={colors.grey}
          color={colors.white}
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
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    marginTop: 30,
    fontFamily: 'Poppins-Regular',
    color: colors.black,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: colors.grey,
  },
  btnContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
