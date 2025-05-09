import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.address}>Gunawanwan street No. 14</Text>
        <TextInput
          style={styles.search}
          placeholder="What would you like to eat?"
        />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.promoContainer}>
        <TouchableOpacity style={[styles.promoCard, { backgroundColor: '#FF7043' }]}>
          <Text style={styles.promoTitle}>Today's Best Deals</Text>
          <Text style={styles.promoText}>Off up to 75%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.promoCard, { backgroundColor: '#EC407A' }]}>
          <Text style={styles.promoTitle}>Weekly Best Deals</Text>
          <Text style={styles.promoText}>Off up to 50%</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.categoryContainer}>
        <TouchableOpacity style={[styles.category, { backgroundColor: '#FFA726' }]}>
          <Text style={styles.categoryText}>Customer Top Picks</Text>
          <Text style={styles.categorySub}>321 Restaurant Already</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.category, { backgroundColor: '#F06292' }]}>
          <Text style={styles.categoryText}>Beverages</Text>
          <Text style={styles.categorySub}>189 Restaurant Already</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.category, { backgroundColor: '#29B6F6' }]}>
          <Text style={styles.categoryText}>Fast Food</Text>
          <Text style={styles.categorySub}>526 Restaurant Already</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.category, { backgroundColor: '#26C6DA' }]}>
          <Text style={styles.categoryText}>Desserts</Text>
          <Text style={styles.categorySub}>891 Restaurant Already</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 15,
  },
  header: {
    marginTop: 30,
    marginBottom: 20,
  },
  address: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  search: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 45,
  },
  promoContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  promoCard: {
    borderRadius: 10,
    padding: 20,
    marginRight: 15,
    width: 200,
    justifyContent: 'center',
  },
  promoTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  promoText: {
    fontSize: 14,
    color: '#fff',
  },
  categoryContainer: {
    marginTop: 10,
  },
  category: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  categoryText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  categorySub: {
    fontSize: 12,
    color: '#fff',
  },
});
