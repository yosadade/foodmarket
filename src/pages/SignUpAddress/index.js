import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Gap, Button, TextInput, Select} from '../../components';

const SignUp = ({navigation}) => {
  const onHandleContinue = () => {
    navigation.replace('SuccessSignUp');
  };
  return (
    <View style={styles.page}>
      <Header title="Address" subTitle="Make sure it's valid" onBack />
      <View style={styles.container}>
        <TextInput label="Phone Number" placeholder="Type your phone number" />
        <Gap height={16} />
        <TextInput label="Address" placeholder="Type your address" />
        <Gap height={16} />
        <TextInput label="House No." placeholder="Type your house number" />
        <Gap height={16} />
        <Select label="City" />
        <Gap height={24} />
        <Button title="Sign Up Now" onPress={onHandleContinue} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
