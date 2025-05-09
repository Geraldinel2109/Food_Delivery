import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';  // O usa OrderScreen si lo prefieres
import TrackingScreen from './screens/TrackingScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderScreen from './screens/OrderScreen';  // Asegúrate de importar la nueva pantalla
import { Ionicons } from '@expo/vector-icons'; // Para íconos
import OrderButton from './components/OrderButton';  // Asegúrate que la ruta sea relativa


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Order') {
              iconName = 'cart';
            } else if (route.name === 'Chat') {
              iconName = 'chatbubble';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF7043', // Naranja claro para los íconos activos
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#FFF',
            borderTopWidth: 0,
            height: 60,
            paddingBottom: 10,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Order"
          component={OrderScreen}  // Aquí usamos la pantalla OrderScreen
        />
        <Tab.Screen name="Chat" component={TrackingScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
