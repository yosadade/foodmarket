import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {EmptyOrder, Header, OrderTabSection} from '../../components';

const Order = ({navigation}) => {
  const [isEmpty] = useState(false);
  return (
    <View style={styles.page}>
      {isEmpty ? (
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
