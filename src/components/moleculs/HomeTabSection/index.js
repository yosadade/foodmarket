/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemListFood} from '..';
import {useSelector, useDispatch} from 'react-redux';
import {getFoodDataByTypes} from '../../../redux/action';
import {colors} from '../../../utils';

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

const NewTaste = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {newTaste} = useSelector((state) => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodDataByTypes('new_food'));
  }, [dispatch]);
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: colors.white,
      }}>
      {newTaste.map((item) => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            image={{uri: item.picturePath}}
            rating={item.rate}
            name={item.name}
            price={item.price}
            onPress={() => navigation.navigate('FoodDetail', item)}
          />
        );
      })}
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {popular} = useSelector((state) => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('popular'));
  }, [dispatch]);
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: colors.white,
      }}>
      {popular.map((item) => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            name={item.name}
            price={item.price}
            rating={item.rate}
            image={{uri: item.picturePath}}
            onPress={() => navigation.navigate('FoodDetail', item)}
          />
        );
      })}
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {recommended} = useSelector((state) => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodDataByTypes('recommended'));
  }, [dispatch]);
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: colors.white,
      }}>
      {recommended.map((item) => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            name={item.name}
            price={item.price}
            rating={item.rate}
            image={{uri: item.picturePath}}
            onPress={() => navigation.navigate('FoodDetail', item)}
          />
        );
      })}
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = () => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recomended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
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

export default HomeTabSection;
