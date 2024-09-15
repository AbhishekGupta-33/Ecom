import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import FastImage from 'react-native-fast-image';

export default function ServiceDetailScreen() {
  // const { serviceId } = route.params;
  const [service, setService] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // loadServiceDetails();
  }, []);

  // const loadServiceDetails = async () => {
  //   try {
  //     const data = await fetchServiceDetails(serviceId);
  //     setService(data);
  //   } catch (error) {
  //     console.error("Failed to load service details:", error);
  //   } finally {
  //     setLoading(false); // Set loading to false after fetching
  //   }
  // };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200ea" />
      </View>
    );
  }

  if (!service) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Service details not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Card>
        <FastImage source={{ uri: service.image }} style={styles.image} />
        <Card.Content>
          <Title>{service.name}</Title>
          <Paragraph>{service.description}</Paragraph>
          <Paragraph>Price: ${service.price}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  image: {
    height: 200,
    width: '100%',
  },
});