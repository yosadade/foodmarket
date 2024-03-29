/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemListFood} from '..';
import {useSelector, useDispatch} from 'react-redux';
import {getInProgress, getPastOrders} from '../../../redux/action';
import {colors} from '../../../utils';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicatorStyle}
    style={styles.container}
    tabStyle={styles.tabStyle}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          color: focused ? colors.black : colors.grey,
          fontFamily: 'Poppins-Medium',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const InProgress = () => {
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {inProgress} = useSelector((state) => state.orderReducer);

  useEffect(() => {
    dispatch(getInProgress());
  }, [dispatch]);

  const onRefreshing = () => {
    setRefreshing(true);
    dispatch(getInProgress());
    setRefreshing(false);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefreshing} />
      }>
      <View
        style={{
          paddingTop: 8,
          paddingHorizontal: 24,
          backgroundColor: colors.white,
        }}>
        {inProgress.map((order) => {
          return (
            <ItemListFood
              key={order.id}
              type="in-progress"
              orderItems={order.quantity}
              price={order.total}
              image={{uri: order.food.picturePath}}
              name={order.food.name}
              onPress={() => navigation.navigate('OrderDetail', order)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const PastOrders = () => {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {pastOrders} = useSelector((state) => state.orderReducer);

  useEffect(() => {
    dispatch(getPastOrders());
  }, [dispatch]);

  const onRefreshing = () => {
    setRefreshing(true);
    dispatch(getInProgress());
    setRefreshing(false);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefreshing} />
      }>
      <View
        style={{
          paddingTop: 8,
          paddingHorizontal: 24,
          backgroundColor: colors.white,
        }}>
        {pastOrders.map((order) => {
          return (
            <ItemListFood
              key={order.id}
              type="past-orders"
              onPress={() => navigation.navigate('OrderDetail', order)}
              image={{uri: order.food.picturePath}}
              name={order.food.name}
              orderItems={order.quantity}
              price={order.total}
              date={order.created_at}
              status={order.status}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
  });
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: colors.black,
    height: 3,
    width: '15%',
    marginLeft: '3%',
  },
  container: {
    backgroundColor: colors.white,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: colors.white3,
    borderBottomWidth: 1,
  },
  tabStyle: {
    width: 'auto',
  },
});

export default OrderTabSection;
