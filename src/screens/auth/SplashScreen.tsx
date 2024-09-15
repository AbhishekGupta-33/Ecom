// src/screens/SplashScreen.tsx

import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Navigate to Login after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FastImage 
        source={require('../../assets/logo.png')} // Replace with your logo path
        style={styles.logo}
        resizeMode={FastImage.resizeMode.contain} // Use contain to maintain aspect ratio
      />
      <Text style={styles.title}>Welcome to Ecom App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SplashScreen;