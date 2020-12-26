import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ICPlus, ICMin} from '../../../assets';

const Counter = ({onValueChange}) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    onValueChange(value);
  });

  const onCount = (type) => {
    let result = value;
    if (type === 'plus') {
      result = value + 1;
      // setValue(value + 1);
    }
    if (type === 'minus') {
      if (value > 1) {
        // setValue(value - 1);
        result = value - 1;
      }
    }
    setValue(result);
    onValueChange(result);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => onCount('minus')}>
        <ICMin />
      </TouchableOpacity>
      <Text style={styles.count}>{value}</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={() => onCount('plus')}>
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
