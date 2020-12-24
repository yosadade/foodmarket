import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#1ABC9C" />
      <Text style={styles.title}>Loading ...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    marginTop: 12,
  },
});
