import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from '../screens/Home';
import CardItemScreen from '../screens/cardItem';
import SideMenu from '../components/SideMenu';
import HeaderComponent from '../components/HeaderComponent';
import SplashScreen from '../screens/Splash';
import SignupScreen from '../screens/Signup';
import LoginScreen from '../screens/Login';
import {Category} from '../screens/Category';
const AppNavigator = createStackNavigator(
  {
    Category: {
      screen: Category,
    },
    Home: {
      screen: HomeScreen,
    },

    CardItem: {
      screen: CardItemScreen,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      header: <HeaderComponent navigation={navigation} />,
    }),
  },
);

export default createAppContainer(
  createStackNavigator({
    Login: {
      screen: LoginScreen,
      navigationOptions: {header: null},
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions: {header: null},
    },
    Splash: {
      screen: SplashScreen,
      navigationOptions: {header: null},
    },
    DrawerAbleApp: {
      screen: createDrawerNavigator(
        {
          Main: {screen: AppNavigator},
        },
        {
          contentComponent: ({navigation}) => (
            <SideMenu navigation={navigation} />
          ),
          hideStatusBar: false,
          drawerWidth: 230,
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
