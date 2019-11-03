import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer  } from 'react-navigation';
import { createDrawerNavigator } from "react-navigation-drawer";
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

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  CardItem: {
    screen: CardItemScreen,
  },
});



const AppContainer = createAppContainer(AppNavigator, DrawerNavigator);

export default AppContainer;