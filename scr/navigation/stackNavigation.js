import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from '../screens/home';
import CardItemScreen from '../screens/cardItem';
import SideMenu from '../components/SideMenu';
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    CardItem: {
      screen: CardItemScreen,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
);

export default createAppContainer(
  createStackNavigator({
    DrawerAbleApp: {
      screen: createDrawerNavigator(
        {
          Main: {screen: AppNavigator},
        },
        {
          contentComponent: ({navigation}) => (
            <SideMenu navigation={navigation} />
          ),
          hideStatusBar: true,
          drawerWidth: 250,
          drawerBackgroundColor: 'rgb(245, 245, 235)',
          contentOptions: {
            activeTintColor: '#6d32ae',
            activeBackgroundColor: '#6d32ae',
          },
        },
      ),
      navigationOptions: {header: null},
    },
  }),
);
