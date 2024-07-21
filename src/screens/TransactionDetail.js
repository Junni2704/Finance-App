import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetail = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Transaction Name: {transaction.name}</Text>
      <Text style={styles.text}>Amount: {transaction.amount}</Text>
      <Text style={styles.text}>Date: {transaction.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default TransactionDetail;