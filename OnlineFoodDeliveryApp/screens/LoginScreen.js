import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>¿No tienes cuenta? Regístrate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#FF7A00',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  registerText: {
    marginTop: 20,
    color: '#888',
  },
});
