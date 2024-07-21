import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const transactions = [
  { id: '1', name: 'Starbucks', amount: 12.00, date: '2024-07-10' },
  { id: '2', name: 'Apple Store', amount: 101.00, date: '2024-07-01' },
  { id: '3', name: 'Sephora', amount: 120.00, date: '2024-07-05' },
  { id: '4', name: 'Shoppers Drug Mart', amount: 12.00, date: '2024-07-10' },
  { id: '5', name: 'Pizza Hut', amount: 24.00, date: '2024-07-02' },
  { id: '6', name: 'Cheesecake Factory', amount: 45.00, date: '2024-07-07' },
  { id: '7', name: 'Nike', amount: 250.00, date: '2024-07-08' },
  { id: '8', name: 'Tim Hortons', amount: 7.89, date: '2024-07-09' },
  { id: '9', name: 'Whole Foods', amount: 78.00, date: '2024-07-11' },
  { id: '10', name: 'Cineplex', amount: 42.50, date: '2024-07-03' },
];

const getTotalExpenses = () => {
  return transactions.reduce((sum, transaction) => sum + transaction.amount, 0).toFixed(2);
};

const getHighSpending = () => {
  const highSpending = transactions.reduce((prev, current) => (prev.amount > current.amount) ? prev : current);
  return `${highSpending.name} $${highSpending.amount.toFixed(2)}`;
};

const getLowSpending = () => {
  const lowSpending = transactions.reduce((prev, current) => (prev.amount < current.amount) ? prev : current);
  return `${lowSpending.name} $${lowSpending.amount.toFixed(2)}`;
};

const Summary = () => {
  const totalTransactions = transactions.length;
  const totalExpenses = getTotalExpenses();
  const highSpending = getHighSpending();
  const lowSpending = getLowSpending();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Transactions</Text>
        <Text style={styles.value}>{totalTransactions}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Balance</Text>
        <Text style={styles.value}>${totalExpenses}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.header}>High Spending</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>{highSpending}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.header}>Low Spending</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>{lowSpending}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  label: {
    fontSize: 16,
    color: '#000000',
  },
  value: {
    fontSize: 16,
    color: '#000000',
  },
  header: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default Summary;