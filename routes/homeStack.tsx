import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home/home';
import ReviewDetails from '../screens/reviewDetails/reviewDetails';
import Header from '../shared/header/header';
import { RootStackParamList } from './drawer';
import { Image } from 'react-native';
const HomeStack = createStackNavigator<RootStackParamList>();

function HomeStackNavigator(): JSX.Element {
  return (
    <HomeStack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: '#eee', height: 60 },
      }}
    >
      <HomeStack.Screen
        name='Home'
        options={({ navigation }) => ({
          headerTitle: () => (
            <Header navigation={navigation} title='GameZone' />
          ),
          headerBackground: () => (
            <Image
              source={require('../assets/game_bg.png')}
              style={{ height: '100%' }}
            />
          ),
        })}
        component={Home}
      />

      <HomeStack.Screen
        name='ReviewDetails'
        options={{
          title: 'ReviewDetails',
        }}
        component={ReviewDetails}
      />
    </HomeStack.Navigator>
  );
}
export default HomeStackNavigator;
