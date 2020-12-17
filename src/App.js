import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SplashScreen, SignIn} from './pages';

const App = () => {
  return (
    <NavigationContainer>
      <SignIn />
    </NavigationContainer>
  );
};

export default App;
