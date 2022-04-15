import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';

const Button = ({type, bgColor = colors.yellow2, color, title, onPress}) => {
  if (type === 'modal') {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container(bgColor, type)}
        onPress={onPress}>
        <Text style={styles.title(color)}>{title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container(bgColor, type)}
      onPress={onPress}>
      <Text style={styles.title(color)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (bgColor, type) => ({
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: type === 'modal' ? 8 : 12,
    paddingHorizontal: type === 'modal' ? 8 : 0,
    backgroundColor: bgColor,
    borderRadius: 8,
  }),
  title: (color) => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: color,
  }),
});
