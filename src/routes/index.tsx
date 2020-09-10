import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import LandingRouter from './landing.routes';
import AppRouter from './app.routes';

import { useDestination } from '../hooks/destination';

const Router: React.FC = () => {
  const { destination, loading } = useDestination();

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#00ADEF" />
      </View>
    );
  }
  return destination.from ? <AppRouter /> : <LandingRouter />;
};

export default Router;
