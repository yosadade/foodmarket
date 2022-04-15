import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ICRight} from '../../../assets';
import {colors} from '../../../utils';

const ItemListMenu = ({label, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.page} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      <ICRight />
    </TouchableOpacity>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.black,
  },
});
