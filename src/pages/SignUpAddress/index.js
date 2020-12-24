/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header, Gap, Button, TextInput, Select} from '../../components';
import {useForm, showMessage} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';
import Axios from 'axios';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Jakarta',
  });
  const dispatch = useDispatch();
  const registerReducer = useSelector((state) => state.registerReducer);

  const onSubmit = () => {
    console.log(form);
    const data = {
      ...form,
      ...registerReducer,
    };
    console.log('data register', data);
    dispatch({type: 'SET_LOADING', value: true});
    Axios.post('http://foodmarket-backend.buildwithangga.id/api/register', data)
      .then((res) => {
        console.log('data success', res.data);
        dispatch({type: 'SET_LOADING', value: false});
        showMessage('Register Success', 'success');
        navigation.replace('SuccessSignUp');
      })
      .catch((err) => {
        dispatch({type: 'SET_LOADING', value: false});
        console.log('Sign Up Error', err.response.data.message);
        showMessage(err.response.data.message);
      });
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header title="Address" subTitle="Make sure it's valid" onBack />
        <View style={styles.container}>
          <TextInput
            label="Phone Number"
            placeholder="Type your phone number"
            value={form.phoneNumber}
            onChangeText={(value) => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={(value) => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label="House No."
            placeholder="Type your house number"
            value={form.houseNumber}
            onChangeText={(value) => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={(value) => setForm('city', value)}
          />
          <Gap height={24} />
          <Button title="Sign Up Now" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

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
