import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome6, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';  // Importé MaterialCommunityIcons para el ícono de 24 horas

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.address}>Gunawanwan street No. 14</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="What would you like to eat?"
        />
        <FontAwesome6 name="heart" size={24} color="#fff" style={styles.icon} />
      </View>

      {/* Wallet and Coins */}
      <View style={styles.walletContainer}>
        <View style={styles.walletSection}>
          <Text style={styles.walletText}>Your Wallet</Text>
          <Text style={styles.walletValue}>Rp699.000</Text>
        </View>
        <View style={styles.walletSection}>
          <Text style={styles.walletText}>Your Coins</Text>
          <Text style={styles.walletValue}>1.200</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome6 name="map-location-dot" size={24} color="#ec4f65" />  {/* Ícono de mapa para Near Me */}
          <Text style={styles.actionButtonText}>Near Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <SimpleLineIcons name="badge" size={24} color="#ec4f65" />  {/* Ícono de badge para Popular */}
          <Text style={styles.actionButtonText}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome6 name="pricetag" size={24} color="#ec4f65" />  {/* Ícono de precio para Discount */}
          <Text style={styles.actionButtonText}>Discount</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="hours-24" size={24} color="#ec4f65" />  {/* Ícono de 24 hours */}
          <Text style={styles.actionButtonText}>24 Hours</Text>
        </TouchableOpacity>
      </View>

      {/* Categorías */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        <TouchableOpacity style={[styles.category, { backgroundColor: '#FFA726' }]}>
          <Text style={styles.categoryText}>Customer Top Picks</Text>
          <Text style={styles.categorySubText}>321 Restaurant Already</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.category, { backgroundColor: '#F06292' }]}>
          <Text style={styles.categoryText}>Beverages</Text>
          <Text style={styles.categorySubText}>189 Restaurant Already</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.category, { backgroundColor: '#29B6F6' }]}>
          <Text style={styles.categoryText}>Fast Food</Text>
          <Text style={styles.categorySubText}>526 Restaurant Already</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.category, { backgroundColor: '#26C6DA' }]}>
          <Text style={styles.categoryText}>Desserts</Text>
          <Text style={styles.categorySubText}>891 Restaurant Already</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Botón flotante */}
      <TouchableOpacity style={styles.floatingButton}>
        <FontAwesome6 name="cart" size={30} color="#fff" />
        <Text style={styles.floatingButtonText}>Go to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 15,
  },
  header: {
    backgroundColor: '#FF7043', // Color de fondo del header
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  address: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  searchInput: {
    height: 50,
    width: '100%',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#FFF',
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  walletContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  walletSection: {
    alignItems: 'center',
  },
  walletText: {
    fontSize: 16,
    color: '#333',
  },
  walletValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF7043',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 10,
  },
  actionButtonText: {
    fontSize: 12,
    color: '#FF7043',
  },
  categoryContainer: {
    marginTop: 10,
  },
  category: {
    padding: 15,
    borderRadius: 10,
    marginRight: 15,
  },
  categoryText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  categorySubText: {
    fontSize: 12,
    color: '#fff',
  },
  floatingButton: {
    backgroundColor: '#FF7043',
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 15,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  floatingButtonText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
