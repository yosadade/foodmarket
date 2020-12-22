import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemListMenu} from '..';

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

const Account = () => {
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: '#FFFFFF',
      }}>
      <ItemListMenu label="Edit Profile" />
      <ItemListMenu label="Home Address" />
      <ItemListMenu label="Security" />
      <ItemListMenu label="Payments" />
    </View>
  );
};

const FoodMarket = () => {
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: '#FFFFFF',
      }}>
      <ItemListMenu label="Rate App" />
      <ItemListMenu label="Help Center" />
      <ItemListMenu label="Privacy & policy" />
      <ItemListMenu label="Terms & Conditions" />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const ProfileTabSection = () => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'FoodMarket'},
  ]);

  const renderScene = SceneMap({
    1: Account,
    2: FoodMarket,
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

export default ProfileTabSection;

const styles = StyleSheet.create({});
