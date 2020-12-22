import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemListFood} from '..';
import {FoodDummy6, FoodDummy7, FoodDummy8, FoodDummy9} from '../../../assets';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: '15%',
      marginLeft: '3%',
    }}
    style={{
      backgroundColor: '#FFFFFF',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{
      width: 'auto',
    }}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          color: focused ? '#020202' : '#8D92A3',
          fontFamily: 'Poppins-Medium',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: '#FFFFFF',
      }}>
      <ItemListFood
        type="in-progress"
        orderItems={3}
        totalOrder="280.000"
        image={FoodDummy6}
        name="Soup Bumil"
        onPress={() => navigation.navigate('OrderDetail')}
      />
      <ItemListFood
        type="in-progress"
        orderItems={3}
        totalOrder="280.000"
        image={FoodDummy7}
        name="Soup Bumil"
        onPress={() => navigation.navigate('OrderDetail')}
      />
      <ItemListFood
        type="in-progress"
        orderItems={3}
        totalOrder="280.000"
        image={FoodDummy8}
        name="Soup Bumil"
        onPress={() => navigation.navigate('OrderDetail')}
      />
      <ItemListFood
        type="in-progress"
        orderItems={3}
        totalOrder="280.000"
        image={FoodDummy9}
        name="Soup Bumil"
        onPress={() => navigation.navigate('OrderDetail')}
      />
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: '#FFFFFF',
      }}>
      <ItemListFood
        type="past-orders"
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy8}
        name="Shrimp"
        orderItems={13}
        totalOrder="230.000"
        date="Jun 12, 14.00"
      />
      <ItemListFood
        type="past-orders"
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy6}
        name="Soup Bumil"
        orderItems={13}
        totalOrder="230.000"
        date="Jun 12, 14.00"
        status="Cancelled"
      />
    </View>
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

export default OrderTabSection;

const styles = StyleSheet.create({});
