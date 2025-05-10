import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../features/cartSlice';  // Importa las acciones

export default function CartScreen() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', margin: 10 }}>
            <Text>{item.name} - ${item.price}</Text>
            <Button title="Remove" onPress={() => dispatch(removeFromCart(item))} />
          </View>
        )}
      />
    </View>
  );
}
