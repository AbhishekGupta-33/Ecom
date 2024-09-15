import React from 'react';
import { Button as PaperButton, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ButtonProps {
  label: string;
  onPress: () => void;
  mode?: 'contained' | 'outlined' | 'text';
  icon?: string; // Icon name from Material Icons
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({ label, onPress, mode = 'contained', icon, ...props }) => {
  return (
    <PaperButton mode={mode} onPress={onPress} {...props} style={{ flexDirection: 'row', alignItems: 'center' }}>
      {icon && <Icon name={icon} size={20} style={{ marginRight: 8 }} />} {/* Icon rendering */}
      {label}
    </PaperButton>
  );
};

export default Button;