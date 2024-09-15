import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import FastImage from 'react-native-fast-image';

interface CartItemProps {
  item: {
    id: string;
    image: string;
    title: string;
    price: number;
    quantity: number;
  };
  onRemove: (id: string) => void; // Function to handle item removal
  onQuantityChange: (id: string, quantity: number) => void; // Function to handle quantity change
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onQuantityChange }) => {
  const handleQuantityIncrease = () => {
    onQuantityChange(item.id, item.quantity + 1);
  };

  const handleQuantityDecrease = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.id, item.quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <FastImage source={{ uri: item.image }} style={styles.image} resizeMode={FastImage.resizeMode.cover} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <IconButton icon="minus" onPress={handleQuantityDecrease} />
          <Text style={styles.quantity}>{item.quantity}</Text>
          <IconButton icon="plus" onPress={handleQuantityIncrease} />
        </View>
      </View>
      <TouchableOpacity onPress={() => onRemove(item.id)} style={styles.removeButton}>
        <Text style={styles.removeText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  removeButton: {
    padding: 10,
  },
  removeText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default CartItem;