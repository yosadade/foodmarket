import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Select = ({label, city}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
          style={styles.picker}
          // selectedValue={this.state.language}
          // style={{height: 50, width: 100}}
          // onValueChange={(itemValue, itemIndex) =>
          //   this.setState({language: itemValue})
          // }
        >
          <Picker.Item label="Jakarta" value="jk" />
          <Picker.Item label="Bandung" value="bd" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    marginTop: 8,
  },
  picker: {
    color: '#020202',
  },
});
