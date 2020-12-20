import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ICPlus, ICMin} from '../../../assets';

const Counter = ({count, onPressMin, onPressPlus}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={onPressMin}>
        <ICMin />
      </TouchableOpacity>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={onPressPlus}>
        <ICPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countContainer: {
    width: 24,
    justifyContent: 'center',
  },
  count: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginHorizontal: 10,
  },
});
