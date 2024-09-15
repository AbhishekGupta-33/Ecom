import React from 'react';
import { IconButton as PaperIconButton } from 'react-native-paper';

interface IconButtonProps {
  icon: string; // Icon name
  onPress: () => void; // Function to handle press event
  [key: string]: any; // Allows additional props
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onPress, ...props }) => {
  return <PaperIconButton icon={icon} onPress={onPress} {...props} />;
};

export default IconButton;