import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import Router from './router';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import {Loading} from './components';
import {StatusBar} from 'react-native';

const MainApp = () => {
  const {isLoading} = useSelector((state) => state.globalReducer);
  useEffect(() => {}, []);
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />
      <Router />
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
