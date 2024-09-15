import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';  // For tab icons
import HomeScreen from '../screens/user/home/HomeScreen';
import CartScreen from '../screens/user/cart/CartScreen';
import AccountScreen from '../screens/user/profile/AccountScreen';
import WishlistScreen from '../screens/user/wishlist/WishlistScreen';
import StoreListScreen from '../screens/user/store/StoreListScreen';
import ProductScreen from '../screens/user/product/ProductScreen';
import ServiceScreen from '../screens/user/service/ServiceScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={
        ({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Products') {
            iconName = 'category';
          } else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
          } else if (route.name === 'Account') {
            iconName = 'account-circle';
          } else if (route.name === 'Wishlist') {
            iconName = 'favorite';
          } else if (route.name === 'Stores') {
            iconName = 'store';
          } else if (route.name === 'Services') {
            iconName = 'build';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200ea',
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={ProductScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Stores" component={StoreListScreen} />
      <Tab.Screen name="Services" component={ServiceScreen} />
    </Tab.Navigator>
  );
}