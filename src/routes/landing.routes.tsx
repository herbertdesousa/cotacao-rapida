import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from '../pages/Landing';

const Landing = createStackNavigator();

const LandingRouter: React.FC = () => {
  return (
    <Landing.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#F9FDFF' },
      }}
    >
      <Landing.Screen name="Landing" component={LandingPage} />
    </Landing.Navigator>
  );
};

export default LandingRouter;
