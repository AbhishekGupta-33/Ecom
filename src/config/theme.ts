import { DefaultTheme } from 'react-native-paper';

// Define the custom theme for the app
export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ea',      // Primary color (e.g., for buttons, headers)
    accent: '#03dac4',       // Accent color (e.g., for FAB, secondary actions)
    background: '#f6f6f6',   // Background color for screens
    surface: '#ffffff',      // Surface color for cards, modals, etc.
    text: '#000000',         // Text color
    error: '#B00020',        // Error color (e.g., validation errors)
    success: '#4CAF50',      // Success color (e.g., success notifications)
  },
  roundness: 8,              // Global roundness for components
};

export default theme;
