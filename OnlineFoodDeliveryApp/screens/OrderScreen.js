import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OrderScreen() {
  const [quantity, setQuantity] = useState(1); // Control del número de ítems
  const [deliveryNote, setDeliveryNote] = useState('');

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <View style={styles.container}>
      {/* Imagen del platillo */}
      <Image style={styles.foodImage} source={{ uri: 'https://example.com/food-image.jpg' }} />
      
      {/* Nombre y precio */}
      <Text style={styles.foodName}>Nama menu</Text>
      <Text style={styles.foodPrice}>Rp34.000 <Text style={styles.oldPrice}>Rp34.000</Text></Text>
      
      {/* Extra discount */}
      <Text style={styles.discount}>Extra discount</Text>

      {/* Controles de cantidad */}
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decrement} style={styles.quantityButton}>
          <Ionicons name="remove" size={20} color="#FF7043" />
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity onPress={increment} style={styles.quantityButton}>
          <Ionicons name="add" size={20} color="#FF7043" />
        </TouchableOpacity>
      </View>

      {/* Nota de entrega */}
      <TextInput
        style={styles.noteInput}
        placeholder="Delivery notes"
        value={deliveryNote}
        onChangeText={setDeliveryNote}
      />

      {/* Botón de agregar al carrito */}
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="cart" size={24} color="#fff" />
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>

      {/* Botones de navegación */}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  foodImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  foodName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  foodPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF7043',
  },
  oldPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#888',
  },
  discount: {
    fontSize: 14,
    color: '#FF7043',
    marginVertical: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
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
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
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
