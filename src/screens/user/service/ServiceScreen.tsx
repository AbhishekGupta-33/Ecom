import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
// import { fetchServices } from '../services/ServiceService';  // API call function

export default function ServiceScreen() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // loadServices();
  }, []);

  const navigation = useNavigation()

  const renderItem = ({ item }: any) => (
    <Card style={styles.card} onPress={() => {}}>
      <FastImage source={{ uri: item.image }} style={styles.image} />
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>{item.description}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={services}
        keyExtractor={({id}:{id:any}) => id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }} // Optional: Add padding to the bottom
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginBottom: 10,
  },
  image: {
    height: 150,
    width: '100%',
    borderRadius: 4, // Optional: Add border radius for better aesthetics
  },
});