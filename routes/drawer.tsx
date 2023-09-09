import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { Review } from '../screens/home/home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStackNavigator from './homeStack';
import AboutStackNavigator from './aboutStack';

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
  ReviewDetails: Review;
  HomeStack: undefined;
  AboutStack: undefined;
};

const Drawer = createDrawerNavigator<RootStackParamList>();
export default function RootDrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name='HomeStack' component={HomeStackNavigator} />
        <Drawer.Screen name='AboutStack' component={AboutStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
