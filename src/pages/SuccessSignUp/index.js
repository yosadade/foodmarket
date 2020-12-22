import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILSuccessSignUp} from '../../assets';
import {Button} from '../../components';

const SuccessSignUp = ({navigation}) => {
  const onHandleButton = () => {
    navigation.replace('MainApp');
  };
  return (
    <View style={styles.page}>
      <ILSuccessSignUp />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Text style={styles.subTitle}>Now you are able to orde</Text>
      <Text style={styles.subTitle}>some foods as a self-reward</Text>
      <View style={styles.btnContainer}>
        <Button title="Find Foods" color="#020202" onPress={onHandleButton} />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginTop: 30,
    marginBottom: 6,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  btnContainer: {
    width: '100%',
    paddingHorizontal: 80,
    marginTop: 30,
  },
});
