import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';

import Router from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#F9FDFF" />
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: '#F9FDFF' }}>
          <Router />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
