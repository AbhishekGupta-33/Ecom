import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Ensure you have the correct import

interface RatingProps {
  rating: number; // Current rating
  maxStars?: number; // Maximum number of stars
}

const Rating: React.FC<RatingProps> = ({ rating, maxStars = 5 }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: maxStars }).map((_, index) => (
        <Icon
          key={index}
          name={index < rating ? "star" : "star-border"}
          size={24}
          color="gold"
        />
      ))}
      <Text style={styles.text}>{rating}/{maxStars}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  text: { marginLeft: 5 },
});

export default Rating;