
import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import FastImage from 'react-native-fast-image';

interface Product {
  image: string;
  title: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  return (
    <Card onPress={onPress} style={{ margin: 10 }}>
      <FastImage
        source={{ uri: product.image }}
        style={{ height: 150, width: '100%' }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Card.Content>
        <Title>{product.title}</Title>
        <Paragraph>{`$${product.price.toFixed(2)}`}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default ProductCard;