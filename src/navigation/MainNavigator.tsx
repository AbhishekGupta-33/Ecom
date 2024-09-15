import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailScreen from '../screens/user/product/ProductDetailScreen';
import CartScreen from '../screens/user/cart/CartScreen';
import ChangePasswordScreen from '../screens/auth/ChangePasswordScreen';
import PrivacyPolicyScreen from '../screens/auth/PrivacyPolicyScreen';
import TermsAndConditionsScreen from '../screens/user/profile/TermsAndConditionsScreen';
import AboutUsScreen from '../screens/user/profile/AboutUsScreen';
import CustomerSupportScreen from '../screens/user/profile/CustomerSupportScreen';
import AddressEditScreen from '../screens/user/address/AddressEditScreen';
import AddressListScreen from '../screens/user/address/AddressListScreen';
import WishlistScreen from '../screens/user/wishlist/WishlistScreen';
import OrderDetailsScreen from '../screens/auth/OrderDetailsScreen';
import OrderHistoryScreen from '../screens/user/order/OrderHistoryScreen';
import CheckoutScreen from '../screens/user/checkout/CheckoutScreen';
import TabNavigator from './TabNavigator';


const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator>
      {/* Tab Navigator for Home, Products, etc. */}
      <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
      <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
      <Stack.Screen name="Wishlist" component={WishlistScreen} />
      <Stack.Screen name="AddressList" component={AddressListScreen} />
      <Stack.Screen name="AddressEdit" component={AddressEditScreen} />
      <Stack.Screen name="CustomerSupport" component={CustomerSupportScreen} />
      <Stack.Screen name="AboutUs" component={AboutUsScreen} />
      <Stack.Screen name="TermsConditions" component={TermsAndConditionsScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
    </Stack.Navigator>
  );
}