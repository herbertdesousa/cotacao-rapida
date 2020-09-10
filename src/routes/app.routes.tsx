import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import BudgetPersonForm from '../pages/Budget/PersonForm';
import BudgetChargeForm from '../pages/Budget/ChargeForm';
import BudgetResult from '../pages/Budget/Result';

const App = createStackNavigator();

const AppRouter: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#F9FDFF' },
    }}
  >
    <App.Screen name="Home" component={Home} />
    <App.Screen name="PersonForm" component={BudgetPersonForm} />
    <App.Screen name="ChargeForm" component={BudgetChargeForm} />
    <App.Screen name="Result" component={BudgetResult} />
  </App.Navigator>
);

export default AppRouter;
