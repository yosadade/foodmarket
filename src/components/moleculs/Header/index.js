import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ICBack} from '../../../assets';
import {colors} from '../../../utils';

const Header = ({title, subTitle, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.back}
          onPress={onBack}>
          <ICBack />
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingTop: 34,
    paddingBottom: 24,
  },
  back: {
    padding: 16,
    paddingLeft: 0,
    marginRight: 16,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: colors.black,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: colors.grey,
  },
});
