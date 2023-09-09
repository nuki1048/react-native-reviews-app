import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Home, { Review } from './screens/home/home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import {} from 'expo';
import About from './screens/about/about';
import HomeStackNavigator from './routes/homeStack';
import RootDrawerNavigator from './routes/drawer';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <RootDrawerNavigator />;
}
