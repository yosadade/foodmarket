/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';
import Axios from 'axios';
import {
  Header,
  ItemListFood,
  ItemValue,
  Button,
  Loading,
} from '../../components';
import {colors, getData, showMessage} from '../../utils';
import {API_HOST} from '../../config';

const OrderSummary = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState('shopee');

  const onHandleCheckout = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING',
    };
    getData('token').then((resToken) => {
      Axios.post(`${API_HOST.uri}/checkout`, data, {
        headers: {
          Authorization: resToken.value,
        },
      })
        .then((res) => {
          setIsPaymentOpen(true);
          setPaymentUrl(res.data.data.payment_url);
        })
        .catch((err) => {
          showMessage(err?.response?.message || 'Terjadi Kesalahan');
        });
    });
  };
  const onNavChange = (state) => {
    const titleWeb = 'Laravel';
    if (state.title === titleWeb) {
      navigation.reset({index: 0, routes: [{name: 'SuccessOrder'}]});
    }
  };
  if (isPaymentOpen) {
    return (
      <>
        <Header
          title="Payment"
          subTitle="You deserve better meal"
          onBack={() => setIsPaymentOpen(false)}
        />
        <WebView
          source={{uri: paymentUrl}}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          onNavigationStateChange={onNavChange}
        />
      </>
    );
  }
  return (
    <View style={styles.page}>
      <Header
        title="Order Summary"
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
            valueColor={colors.green}
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
    color: colors.black,
  },
  content: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  button: {
    paddingHorizontal: 24,
    marginVertical: 24,
  },
});
