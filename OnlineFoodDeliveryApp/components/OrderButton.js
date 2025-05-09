import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OrderButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrder = () => {
    setIsLoading(true);

    // Simula un proceso de pedido con un setTimeout
    setTimeout(() => {
      setIsLoading(false);
      setOrderPlaced(true);
    }, 3000); // 3 segundos para simular el proceso
  };

  return (
    <View style={styles.container}>
      {orderPlaced ? (
        // Si el pedido fue exitoso
        <View style={styles.successMessage}>
          <Ionicons name="checkmark-circle" size={30} color="green" />
          <Text style={styles.successText}>Order successful!</Text>
        </View>
      ) : (
        // Si no se ha hecho el pedido
        <TouchableOpacity
          style={[styles.button, isLoading && styles.loadingButton]}
          onPress={handleOrder}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <>
              <Ionicons name="cart" size={24} color="#fff" />
              <Text style={styles.buttonText}>Place Order</Text>
            </>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF7043', // Naranja del diseño
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '80%',
    justifyContent: 'center',
  },
  loadingButton: {
    backgroundColor: '#FFB74D', // Color más suave cuando está en proceso
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  successMessage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  successText: {
    marginLeft: 10,
    color: 'green',
    fontWeight: 'bold',
  },
});
