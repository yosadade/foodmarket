/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text, View, Dimensions, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Logo} from '../../assets';
import {colors, getData} from '../../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then((res) => {
        if (res) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('SignIn');
        }
      });
    }, 2000);
  }, []);
  const entireScreenWidth = Dimensions.get('window').width;
  EStyleSheet.build({$rem: entireScreenWidth / 320});
  return (
    <View style={styles.page}>
      <StatusBar
        animated={true}
        backgroundColor={colors.yellow}
        barStyle="dark-content"
      />
      <Logo />
      <Text style={styles.title}>FoodMarket</Text>
    </View>
  );
};

export default SplashScreen;

const styles = EStyleSheet.create({
  page: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.yellow,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: '32rem',
    color: '#020202',
    marginTop: '30rem',
  },
});
