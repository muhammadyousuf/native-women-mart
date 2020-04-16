import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import AppContainer from './scr/navigation/stackNavigation';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import EvilIconsIcons from 'react-native-vector-icons/EvilIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import fontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

AntDesignIcons.loadFont();
EntypoIcons.loadFont();
EvilIconsIcons.loadFont();
FeatherIcons.loadFont();
fontAwesomeIcons.loadFont();
Octicons.loadFont();

FontistoIcons.loadFont();
MaterialIcons.loadFont();
MaterialComunityIcons.loadFont();
IonIcons.loadFont();

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
        animated={true}
      />

      <AppContainer />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
