import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';

const Button = ({bgColor = colors.yellow2, color, title, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container(bgColor)}
      onPress={onPress}>
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
