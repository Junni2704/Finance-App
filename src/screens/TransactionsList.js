import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const transactions = [
  { id: '1', name: 'Starbucks', amount: '$12.00', date: '2024-07-10' },
  { id: '2', name: 'Apple Store', amount: '$101.00', date: '2024-07-01' },
  { id: '3', name: 'Sephora', amount: '$120.00', date: '2024-07-05' },
  { id: '4', name: 'Shoppers Drug Mart', amount: '$12.00', date: '2024-07-10' },
  { id: '5', name: 'Pizza Hut', amount: '$24.00', date: '2024-07-02' },
  { id: '6', name: 'Cheesecake Factory', amount: '$45.00', date: '2024-07-07' },
  { id: '7', name: 'Nike', amount: '$250.00', date: '2024-07-08' },
  { id: '8', name: 'Tim Hortons', amount: '$7.89', date: '2024-07-09' },
  { id: '9', name: 'Whole Foods', amount: '$78.00', date: '2024-07-11' },
  { id: '10', name: 'Cineplex', amount: '$42.50', date: '2024-07-03' },
];

const TransactionsList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}>
            <View style={styles.item}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.amount}>{item.amount}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  name: {
    fontSize: 16,
    color: '#000000',
  },
  amount: {
    fontSize: 16,
    color: '#000000',
  },
});

export default TransactionsList;