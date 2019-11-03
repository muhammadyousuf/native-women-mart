import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from '../screens/home';
import CardItemScreen from '../screens/cardItem';

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
      /*header: (props) => {
          return <Toolbar  navigation={navigation} scene={props.scene.descriptor} navProps={props}/>;
      },*/
      /*headerStyle:Platform.select({
          ios:{},
          android:{
              paddingTop:35,
              height:90
          }
      })*/
    }),
    //transitionConfig: getSlideFromRightTransition,
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: AppNavigator,
    CardItem: AppNavigator,
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'rgb(255, 255, 255)',
    // overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6d32ae',
    },
  },
);

const AppContainer = createAppContainer(DrawerNavigator, AppNavigator);

export default AppContainer;
