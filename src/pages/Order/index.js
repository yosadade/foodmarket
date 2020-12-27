import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {EmptyOrder, Header, OrderTabSection} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {getOrders} from '../../redux/action';

const Order = () => {
  const dispatch = useDispatch();
  const {orders} = useSelector((state) => state.orderReducer);
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch, orders]);

  return (
    <View style={styles.page}>
      {orders.length < 1 ? (
        <EmptyOrder />
      ) : (
        <View style={styles.container}>
          <Header title="Your Orders" subTitle="Wait for the best meal" />
          <View style={styles.tabContainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#FFFFFF',
  },
});
