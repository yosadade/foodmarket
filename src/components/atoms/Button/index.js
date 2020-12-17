import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({bgColor = '#FFC700', color, title}) => {
  return (
    <TouchableOpacity style={styles.container(bgColor)}>
      <Text style={styles.title(color)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (bgColor) => ({
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: bgColor,
    borderRadius: 8,
  }),
  title: (color) => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: color,
  }),
});
