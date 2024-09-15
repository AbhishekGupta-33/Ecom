import { Alert } from "react-native";

// Error handler for catching API or other application errors
export const handleError = (error: any) => {
    if (error.response) {
      // Server responded with a status other than 200
      console.error(`Error: ${error.response.data.message}`);
      Alert.alert(`Error: ${error.response.data.message}`);
    } else if (error.request) {
      // No response received
      console.error('Network error or no response from server');
      Alert.alert('Network error or no response from server');
    } else {
      // Something went wrong setting up the request
      console.error('Error: ', error.message);
      Alert.alert(`Error: ${error.message}`);
    }
  };
  