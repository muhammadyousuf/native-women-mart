import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/home';
import CardItemScreen from '../screens/cardItem';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  CardItem: {
    screen: CardItemScreen,
  },
});




const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;