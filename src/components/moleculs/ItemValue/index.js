import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Numbers} from '..';
import {colors} from '../../../utils';

const ItemValue = ({label, value, valueColor = '#020202', type}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {type === 'currency' ? (
        <Numbers number={value} style={styles.value(valueColor)} />
      ) : (
        <Text style={styles.value(valueColor)}>{value}</Text>
      )}
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.grey,
  },
  value: (valueColor) => ({
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: valueColor,
  }),
});
