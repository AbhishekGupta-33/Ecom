import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/auth/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import PhoneVerificationScreen from '../screens/auth/PhoneVerificationScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';
const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen 
        name="Splash" 
        component={SplashScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
      />
      <Stack.Screen 
        name="Signup" 
        component={SignupScreen} 
      />
      <Stack.Screen 
        name="PhoneVerification" 
        component={PhoneVerificationScreen} 
      />
      <Stack.Screen 
        name="ForgotPassword" 
        component={ForgotPasswordScreen} 
      />
      <Stack.Screen 
        name="ResetPassword" 
        component={ResetPasswordScreen} 
      />
    </Stack.Navigator>
  );
}