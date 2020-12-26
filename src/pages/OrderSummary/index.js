/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, ItemListFood, ItemValue, Button} from '../../components';

const OrderSummary = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;
  const onHandleCheckout = () => {
    navigation.replace('SuccessOrder');
  };
  return (
    <View style={styles.page}>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBack={() => navigation.goBack()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.label}>Item Order</Text>
          <ItemListFood
            type="order-summary"
            item={transaction.totalItem}
            image={{uri: item.picturePath}}
            name={item.name}
            price={item.price}
          />
          <Text style={[styles.label, {marginTop: 16}]}>
            Details Transaction
          </Text>
          <ItemValue
            label={item.name}
            value={transaction.totalPrice}
            type="currency"
          />
          <ItemValue
            label="Driver"
            value={transaction.driver}
            type="currency"
          />
          <ItemValue label="Tax 10%" value={transaction.tax} type="currency" />
          <ItemValue
            label="Total Price"
            value={transaction.total}
            valueColor="#1ABC9C"
            type="currency"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Deliver To:</Text>
          <ItemValue label="Name" value={userProfile.name} />
          <ItemValue label="Phone No." value={userProfile.phoneNumber} />
          <ItemValue label="Address" value={userProfile.address} />
          <ItemValue label="House No." value={userProfile.houseNumber} />
          <ItemValue label="City" value={userProfile.city} />
        </View>
        <View style={styles.button}>
          <Button title="Checkout Now" onPress={onHandleCheckout} />
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
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
    marginVertical: 24,
  },
});
