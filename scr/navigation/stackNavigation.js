import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import HomeScreen from '../screens/Home';
import CardItemScreen from '../screens/cardItem';
import SideMenu from '../components/SideMenu';
import HeaderComponent from '../components/HeaderComponent';
import SplashScreen from '../screens/Splash';
import SignupScreen from '../screens/Signup';
import LoginScreen from '../screens/Login';
import ForgotPasswordScreen from '../screens/forgotPassword';
import {Category} from '../screens/Category';
import {View, Icon} from 'native-base';
import {BgThemeColor} from '../themes/color';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon
              name="home"
              type="Entypo"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{color: tintColor, fontSize: 25}}
            />
          </View>
        ),
        tabBarBadge: null,
      },
    },
    Me: {
      screen: CardItemScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon
              name="user-circle-o"
              type="FontAwesome"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{color: tintColor, fontSize: 25}}
            />
          </View>
        ),
        tabBarBadge: null,
        tabBarLabel: 'Me',
      },
    },
    CardItem: {
      screen: CardItemScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon
              name="shopping-cart"
              type="Entypo"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{color: tintColor, fontSize: 25}}
            />
          </View>
        ),
        tabBarBadge: 2,
        tabBarLabel: 'Cart',
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: 'orange',
    barStyle: {backgroundColor: BgThemeColor},
  },
);
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: TabNavigator,
    },
    Category: {
      screen: Category,
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

    forgotPassword: {
      screen: ForgotPasswordScreen,
      navigationOptions: {header: null},
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {header: null},
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions: {header: null},
    },
  }),
);
