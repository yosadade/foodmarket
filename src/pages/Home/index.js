import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  ProfileDummy,
  FoodDummy1,
  FoodDummy3,
  FoodDummy4,
  FoodDummy5,
} from '../../assets/dummy';
import {FoodCard, Gap, HomeTabSection, HomeProfile} from '../../components';
import {getData} from '../../utils';

const Home = () => {
  const [photo, setPhoto] = useState(ProfileDummy);
  useEffect(() => {
    getData('userProfile')
      .then((res) => {
        console.log(res.profile_photo_url);
        setPhoto({uri: res.profile_photo_url});
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <HomeProfile image={photo} />

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
          <HomeTabSection />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
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
