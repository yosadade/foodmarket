/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, ItemListFood, ItemValue, Button} from '../../components';
import Axios from 'axios';
import {getData} from '../../utils';

const OrderDetail = ({navigation, route}) => {
  const order = route.params;

  const onCancel = () => {
    const data = {
      status: 'CANCELLED',
    };

    getData('token').then((resToken) => {
      Axios.post(
        `http://foodmarket-backend.buildwithangga.id/api/transaction/${order.id}`,
        data,
        {
          headers: {
            Authorization: resToken.value,
          },
        },
      )
        .then((res) => {
          console.log('success cancel order', res);
          navigation.reset({index: 0, routes: [{name: 'Order'}]});
        })
        .catch((err) => {
          console.log('error', err);
        });
    });
  };
  return (
    <View style={styles.page}>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBack={() => navigation.goBack()}
      />
      <ScrollView style={{flex: 1}}>
        <View style={styles.content}>
          <Text style={styles.label}>Item Order</Text>
          <ItemListFood
            type="order-summary"
            item={order.quantity}
            image={{uri: order.food.picturePath}}
            name={order.food.name}
            price={order.food.price}
          />
          <Text style={[styles.label, {marginTop: 16}]}>
            Details Transaction
          </Text>
          <ItemValue
            label={order.food.name}
            value={order.food.price * order.quantity}
            type="currency"
          />
          <ItemValue label="Drive" value="IDR 50.000" />
          <ItemValue
            label="Tax 10%"
            value={(10 / 100) * order.total}
            type="currency"
          />
          <ItemValue
            label="Total Price"
            value={order.total}
            valueColor="#1ABC9C"
            type="currency"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Deliver To:</Text>
          <ItemValue label="Name" value={order.user.name} />
          <ItemValue label="Phone No." value={order.user.phoneNumber} />
          <ItemValue label="Address" value={order.user.address} />
          <ItemValue label="House No." value={order.user.houseNumber} />
          <ItemValue label="City" value={order.user.city} />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Order Status</Text>
          <ItemValue
            label={`#${order.id}`}
            value={order.status}
            valueColor={order.status === 'CANCELLED' ? '#D9435E' : '#1ABC9C'}
          />
        </View>
        <View style={styles.button}>
          {order.status === 'PENDING' && (
            <Button
              title="Cancel My Order"
              onPress={onCancel}
              bgColor="#D9435E"
              color="#FFFFFF"
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  page: {
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
