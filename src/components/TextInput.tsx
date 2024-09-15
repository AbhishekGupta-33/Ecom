import React from 'react';
import { TextInput as PaperTextInput, HelperText } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  error?: boolean; // To indicate if there's an error
  icon?: string; // Icon name from Material Icons
  [key: string]: any;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  error = false,
  icon,
  ...props
}) => {
  return (
    <>
      <PaperTextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        left={icon ? <PaperTextInput.Icon name={() => <Icon name={icon} size={20} />} /> : undefined}
        error={error}
        {...props}
      />
      {error && <HelperText type="error">This field is required.</HelperText>}
    </>
  );
};

export default TextInput;