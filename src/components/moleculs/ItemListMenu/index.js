import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ICRight} from '../../../assets';

const ItemListMenu = ({label}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.page}>
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
    color: '#020202',
  },
});
