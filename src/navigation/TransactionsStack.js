import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsList from '../screens/TransactionsList';
import TransactionDetail from '../screens/TransactionDetail';

const Stack = createStackNavigator();

const TransactionsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionsList" component={TransactionsList} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetail} />
    </Stack.Navigator>
  );
};

export default TransactionsStack;