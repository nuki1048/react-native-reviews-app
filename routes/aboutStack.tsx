import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about/about';
import Header from '../shared/header/header';
import { RootStackParamList } from './drawer';
import { Image } from 'react-native';

const AboutStack = createStackNavigator<RootStackParamList>();

function AboutStackNavigator(): JSX.Element {
  return (
    <AboutStack.Navigator
      initialRouteName='About'
      screenOptions={{
        headerStyle: { backgroundColor: '#eee', height: 60 },
        headerTintColor: '#444',
      }}
    >
      <AboutStack.Screen
        name='About'
        options={({ navigation }) => ({
          headerTitle: () => <Header navigation={navigation} title='About' />,
          headerBackground: () => (
            <Image
              source={require('../assets/game_bg.png')}
              style={{ height: '100%' }}
            />
          ),
        })}
        component={About}
      />
    </AboutStack.Navigator>
  );
}
export default AboutStackNavigator;
