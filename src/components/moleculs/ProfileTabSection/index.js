/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemListMenu} from '..';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors} from '../../../utils';
import {CustomModal} from '../..';
import {ICSignOut} from '../../../assets';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: colors.black,
      height: 3,
      width: '15%',
      marginLeft: '3%',
    }}
    style={{
      backgroundColor: colors.white,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: colors.white3,
      borderBottomWidth: 1,
    }}
    tabStyle={{
      width: 'auto',
    }}
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

const Account = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigation();
  const showModal = () => {
    setIsVisible(!isVisible);
  };
  const signOut = () => {
    setIsVisible(false);
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
    });
  };
  return (
    <>
      <View
        style={{
          paddingTop: 8,
          paddingHorizontal: 24,
          backgroundColor: colors.white,
        }}>
        <ItemListMenu label="Edit Profile" />
        <ItemListMenu label="Home Address" />
        <ItemListMenu label="Security" />
        <ItemListMenu label="Payments" />
        <ItemListMenu label="Sign Out" onPress={signOut} />
      </View>
      {/* {isVisible && (
        <CustomModal
          isVisible={isVisible}
          icon={<ICSignOut />}
          label="Sign Out"
          title="Are you sure you want to exit the app?"
          onBackdropPress={() => setIsVisible(!isVisible)}
          onSubmit={signOut}
        />
      )} */}
    </>
  );
};

const FoodMarket = () => {
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: colors.white,
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
