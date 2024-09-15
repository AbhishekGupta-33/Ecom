/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';

import { PaperProvider } from 'react-native-paper';
import store from './store/store';
import MainNavigator from './navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';



function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <AuthNavigator/>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default ()=>{
  return(
    <Provider store={store}>
    <PaperProvider>
    <App />
  </PaperProvider>
  </Provider>
  )
};
