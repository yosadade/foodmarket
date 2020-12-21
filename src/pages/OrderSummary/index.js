/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, ItemListFood, ItemValue, Button} from '../../components';
import {FoodDummy1} from '../../assets';

const OrderSummary = () => {
  return (
    <View style={styles.page}>
      <Header title="Payment" subTitle="You deserve better meal" />
      <View style={styles.content}>
        <Text style={styles.label}>Item Order</Text>
        <ItemListFood
          item={14}
          image={FoodDummy1}
          name="Soup Bumil"
          price="297.000"
        />
        <Text style={[styles.label, {marginTop: 16}]}>Details Transaction</Text>
        <ItemValue label="Cherry Healthy" value="IDR 1.839.000" />
        <ItemValue label="Drive" value="IDR 50.000" />
        <ItemValue label="Tax 10%" value="IDR 183.900" />
        <ItemValue label="Total Price" value="IDR 2.000.000" />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Deliver To:</Text>
        <ItemValue label="Name" value="Yosada Dede" />
        <ItemValue label="Phone No." value="0899 1989 089" />
        <ItemValue label="Address" value="Sukorame, Dlingo" />
        <ItemValue label="House No." value="17" />
        <ItemValue label="City" value="Yogyakarta" />
      </View>
      <View style={styles.button}>
        <Button title="Checkout Now" />
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  page: {},
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  content: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
