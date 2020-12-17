import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ICBack} from '../../../assets';

const Header = ({title, subTitle, navigation, onBack}) => {
  const onHandleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.back}
          onPress={onHandleBack}>
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
    backgroundColor: '#FFFFFF',
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
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#8D92A3',
  },
});
