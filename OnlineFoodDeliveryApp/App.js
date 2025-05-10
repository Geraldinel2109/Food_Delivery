import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import TrackingScreen from './screens/TrackingScreen';
import ProfileScreen from './screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';  // Importa el Provider de Redux
import { store } from './store';         // Tu configuración de Redux

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>  {/* Usamos Redux aquí */}
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
            tabBarActiveTintColor: '#FF7043',
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
          <Tab.Screen name="Order" component={CartScreen} />
          <Tab.Screen name="Chat" component={TrackingScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
