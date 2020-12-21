import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemListFood} from '..';
import {FoodDummy6, FoodDummy7, FoodDummy8} from '../../../assets';

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

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: '#FFFFFF',
      }}>
      <ItemListFood
        rating
        image={FoodDummy6}
        name="Soup Bumil"
        price="284.000"
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        rating
        image={FoodDummy7}
        name="Chicken"
        price="284.000"
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        rating
        image={FoodDummy8}
        name="Shrimp"
        price="284.000"
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        rating
        image={FoodDummy6}
        name="Soup Bumil"
        price="284.000"
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: '#FFFFFF',
      }}>
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy8}
        name="Shrimp"
        price="284.000"
      />
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy6}
        name="Soup Bumil"
        price="284.000"
      />
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy7}
        name="Chicken"
        price="284.000"
      />
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy6}
        name="Soup Bumil"
        price="284.000"
      />
    </View>
  );
};
const Recomended = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: '#FFFFFF',
      }}>
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy8}
        name="Shrimp"
        price="284.000"
      />
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy6}
        name="Soup Bumil"
        price="284.000"
      />
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy7}
        name="Chicken"
        price="284.000"
      />
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy6}
        name="Soup Bumil"
        price="284.000"
      />
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
    3: Recomended,
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

const styles = StyleSheet.create({});
