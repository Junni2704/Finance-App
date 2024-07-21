import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionsStack from './TransactionsStack';
import Summary from '../screens/Summary';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Transactions" component={TransactionsStack} />
      <Tab.Screen name="Summary" component={Summary} />
    </Tab.Navigator>
  );
};

export default TabNavigator;