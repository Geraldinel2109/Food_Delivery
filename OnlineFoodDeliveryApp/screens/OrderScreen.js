import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import OrderButton from '../components/OrderButton';  // Asegúrate de que la ruta es correcta

export default function OrderScreen() {
  const [deliveryNote, setDeliveryNote] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Bottegea's Fried Rice</Text>
      <Text style={styles.subheader}>Orange leaves, chicken, tempeh, sambal, singkong, egg, crackers...</Text>
      <Text style={styles.price}>Rp129.000 <Text style={styles.oldPrice}>Rp170.000</Text></Text>

      <Text style={styles.discount}>Extra discount</Text>

      {/* Delivery Notes */}
      <TextInput
        style={styles.textInput}
        placeholder="Delivery notes"
        value={deliveryNote}
        onChangeText={setDeliveryNote}
      />

      {/* Order Button */}
      <OrderButton />

      {/* Popular Dishes */}
      <Text style={styles.popularDishesHeader}>Popular dishes from this resto</Text>
      <View style={styles.popularDishItem}>
        <Text style={styles.dishText}>Calamari</Text>
        <Text style={styles.dishPrice}>Rp125.500</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.popularDishItem}>
        <Text style={styles.dishText}>Chicken Parmigiana</Text>
        <Text style={styles.dishPrice}>Rp198.000</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Payment Summary */}
      <View style={styles.paymentSummary}>
        <Text style={styles.summaryText}>3 Discounts are applied</Text>
        <Text style={styles.summaryText}>Price: Rp129.000</Text>
        <Text style={styles.summaryText}>Delivery fee: Free</Text>
        <Text style={styles.summaryText}>Total payment: Rp129.000</Text>
      </View>

      {/* Wallet Section */}
      <Text style={styles.wallet}>My wallet: - Rp129.000</Text>

      <TouchableOpacity style={styles.placeOrderButton}>
        <Text style={styles.placeOrderText}>Place order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheader: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF7043',
    marginBottom: 10,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontSize: 16,
    color: '#888',
  },
  discount: {
    fontSize: 16,
    color: '#FF7043',
    marginBottom: 20,
  },
  textInput: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  popularDishesHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  popularDishItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  dishText: {
    fontSize: 16,
  },
  dishPrice: {
    fontSize: 16,
    color: '#FF7043',
  },
  addButton: {
    backgroundColor: '#FF7043',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  addText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  paymentSummary: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 5,
  },
  wallet: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  placeOrderButton: {
    backgroundColor: '#FF7043',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  placeOrderText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
