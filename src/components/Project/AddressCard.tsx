import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

interface Address {
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface AddressCardProps {
  address: Address; // Address object
}

const AddressCard: React.FC<AddressCardProps> = ({ address }) => {
  return (
    <Card style={{ margin: 10 }}>
      <Card.Content>
        <Title>{address.name}</Title>
        <Paragraph>{`${address.street}, ${address.city}, ${address.state}`}</Paragraph>
        <Paragraph>{`${address.zipCode}, ${address.country}`}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default AddressCard;