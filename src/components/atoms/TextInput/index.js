/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, TextInput as TextInputRN} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {colors} from '../../../utils';

const TextInput = ({label, placeholder, ...restProps}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN
        {...restProps}
        autoCapitalize="none"
        placeholder={placeholder}
        style={{
          borderWidth: 1,
          borderColor: colors.black,
          borderRadius: 8,
          padding: 10,
          marginTop: 8,
        }}
      />
    </View>
  );
};

export default TextInput;

const styles = EStyleSheet.create({
  container: {},
  label: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: colors.black,
  },
});
