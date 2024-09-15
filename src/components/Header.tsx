import React from 'react';
import { Appbar } from 'react-native-paper';

interface HeaderProps {
  title: string;
  onBackPress?: () => void; // Optional back press function
}

const Header: React.FC<HeaderProps> = ({ title, onBackPress }) => {
  return (
    <Appbar.Header>
      {onBackPress && <Appbar.BackAction onPress={onBackPress} />}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default Header;