import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  ProfileDummy,
  FoodDummy1,
  FoodDummy3,
  FoodDummy4,
  FoodDummy5,
} from '../../assets/dummy';
import {FoodCard, Gap} from '../../components';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: '15%',
      marginLeft: '3%',
    }}
    style={{backgroundColor: '#FFFFFF'}}
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
const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#FFFFFF'}]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#FFFFFF'}]} />
);

const initialLayout = {width: Dimensions.get('window').width};

const Home = () => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recomended'},
  ]);

  const renderScene = SceneMap({
    1: FirstRoute,
    2: SecondRoute,
    3: FirstRoute,
  });
  return (
    <View style={styles.page}>
      <View style={styles.welcomeUser}>
        <View>
          <Text style={styles.appName}>Foodmarket</Text>
          <Text style={styles.desc}>Let's get some foods</Text>
        </View>
        <Image source={ProfileDummy} style={styles.photoProfile} />
      </View>

      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <Gap width={24} />
            <FoodCard image={FoodDummy1} name="Cherry Healthy" />
            <FoodCard image={FoodDummy5} name="Cherry Healthy" />
            <FoodCard image={FoodDummy3} name="Cherry Healthy" />
            <FoodCard image={FoodDummy4} name="Cherry Healthy" />
          </View>
        </ScrollView>
      </View>

      <View style={styles.tabContainer}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  welcomeUser: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: '#FFFFFF',
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  photoProfile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  foodCardContainer: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  tabContainer: {
    flex: 1,
  },
  scene: {
    flex: 1,
  },
});
