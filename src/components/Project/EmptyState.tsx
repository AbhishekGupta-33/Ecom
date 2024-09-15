import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';

interface EmptyStateProps {
  message: string; // Message to display when there's no data
  onRetry?: () => void; // Optional retry function
  buttonLabel?: string; // Optional label for the button
}

const EmptyState: React.FC<EmptyStateProps> = ({ message, onRetry, buttonLabel = "Retry" }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="sentiment-dissatisfied" size={50} color="gray" />
      <Text style={styles.message}>{message}</Text>
      {onRetry && (
        <Button title={buttonLabel} onPress={onRetry} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
  },
});

export default EmptyState;