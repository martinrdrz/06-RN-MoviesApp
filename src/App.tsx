import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {Navigation} from './presentation/navegation/Navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};
