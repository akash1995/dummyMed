import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';

import HomeScreen from '../Home';
import DetailScreen from '../Details';
const AppNavigation = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: null,
      },
    },
    DetailScreen: {
      screen: DetailScreen,
      navigationOptions: {
        headerShown: null,
      },
    },
  },
  {
    navigationOptions: {
      gestureEnabled: false,
      headerVisible: false,
    },
    headerMode: 'screen',
  },
);

export default createAppContainer(AppNavigation);
