import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, TextInput, Button, Gap} from '../../components';
import {useForm} from '../../utils';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const onHandleSignUp = () => {
    navigation.navigate('SignUp');
  };
  const onSubmit = () => {
    console.log(form);
  };
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find you best ever meal" />
      <View style={styles.container}>
        <TextInput
          label="Email"
          placeholder="Type your email address"
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          secureTextEntry
          label="Password"
          placeholder="Type your password"
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
        />
        <Gap height={24} />
        <Button title="Sign In" onPress={onSubmit} />
        <Gap height={12} />
        <Button
          title="Create New Account"
          bgColor="#8D92A3"
          color="#FFFFFF"
          onPress={onHandleSignUp}
        />
      </View>
    </View>
  );
};

export default SignIn;

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
});
