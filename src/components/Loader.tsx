import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const Loader: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#6200ee" /> {/* You can customize the color */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2', // Optional: Set a background color
  },
});

export default Loader;