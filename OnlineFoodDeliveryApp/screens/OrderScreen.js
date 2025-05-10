import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OrderScreen() {
  const [quantity, setQuantity] = useState(1);
  const [deliveryNote, setDeliveryNote] = useState('');
  const [orderStatus, setOrderStatus] = useState('');

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    setOrderStatus('loading');
    setTimeout(() => {
      setOrderStatus('success');
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Your Cart</Text>

      {/* Food Items Grid */}
      <View style={styles.grid}>
        {[...Array(4)].map((_, index) => (
          <View key={index} style={styles.foodCard}>
            <Image
              style={styles.foodImage}
              source={{ uri: 'https://example.com/food-image.jpg' }}
            />
            <Text style={styles.foodName}>Nama menu</Text>
            <Text style={styles.foodPrice}>
              Rp34.000 <Text style={styles.oldPrice}>Rp34.000</Text>
            </Text>
            <Text style={styles.discount}>Extra discount</Text>

            {/* Quantity Controls */}
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={decrement} style={styles.quantityButton}>
                <Ionicons name="remove" size={20} color="#FF7043" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={increment} style={styles.quantityButton}>
                <Ionicons name="add" size={20} color="#FF7043" />
              </TouchableOpacity>
            </View>

            {/* Delivery Notes */}
            <TextInput
              style={styles.noteInput}
              placeholder="Delivery notes"
              value={deliveryNote}
              onChangeText={setDeliveryNote}
            />

            {/* Add to Cart Button */}
            <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
              <Ionicons name="cart" size={24} color="#fff" />
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Order Status (Loading / Success) */}
      {orderStatus === 'loading' && (
        <View style={styles.orderStatus}>
          <Text>Order process..</Text>
        </View>
      )}
      {orderStatus === 'success' && (
        <View style={styles.orderStatus}>
          <Text>Order successful! Your food will arrive in 25 minutes.</Text>
        </View>
      )}

      {/* Footer Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="home" size={24} color="#FF7043" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="cart" size={24} color="#FF7043" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="chatbubble" size={24} color="#FF7043" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="person" size={24} color="#FF7043" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  foodCard: {
    width: '48%',
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
  },
  foodImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  foodPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF7043',
  },
  oldPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: '#888',
  },
  discount: {
    fontSize: 12,
    color: '#FF7043',
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  quantityButton: {
    backgroundColor: '#FFEB3B',
    padding: 10,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 15,
  },
  noteInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#FF7043',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 25,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  orderStatus: {
    alignItems: 'center',
    marginVertical: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  footerButton: {
    backgroundColor: '#FFEB3B',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
});
