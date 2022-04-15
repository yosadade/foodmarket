import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Button} from '../../atoms';
import {ILOrderEmpty} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../../utils';

const EmptyOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ILOrderEmpty />
      <Text style={styles.title}>Ouch! Hungry</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Seems like you have not</Text>
      <Text style={styles.subTitle}>ordered any food yet</Text>
      <Gap height={30} />
      <View style={styles.btnContainer}>
        <Button
          title="Find Foods"
          color="#020202"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    marginTop: 30,
    fontFamily: 'Poppins-Regular',
    color: colors.black,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: colors.grey,
  },
  btnContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
