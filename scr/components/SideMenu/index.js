import React from 'react';

import {
  Platform,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {Text, View, Icon, Title, Subtitle} from 'native-base';
import {BgThemeColor, WhiteBgColor} from '../../themes/color';
import Logo from '../../assets/images/logo.png';

class SideMenu extends React.Component {
  UNSAFE_componentWillReceiveProps(preProps) {
    if (this.props.navigation !== preProps.navigation) {
      const {state} = this.props.navigation;
      const {routes} = state.routes[0];
      let currentRoute = routes.length - 1;
      console.log(routes[currentRoute].routeName);
    }
  }
  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.ScrollViewStyle}>
          <View>
            <View style={styles.MenuProfile}>
              <TouchableOpacity style={styles.Profile}>
                <Image source={Logo} style={styles.ProfileImage} />
                <View style={styles.appNameStyle}>
                  <Title style={styles.UserName}>Women</Title>
                  <Subtitle style={styles.UserName}>---Shop---</Subtitle>
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.SingleRow}
              onPress={() => navigate('Home')}>
              <Icon style={styles.SideMenuIcon} type="Feather" name="list" />
              <Text style={styles.ItemText}>HOME</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.SingleRow}
              onPress={() => navigate('Profile')}>
              <Icon style={styles.SideMenuIcon} type="Entypo" name="user" />
              <Text style={styles.ItemText}>PROFILE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SingleRow}>
              <Icon style={styles.SideMenuIcon} type="Entypo" name="log-out" />
              <Text style={styles.ItemText}>LOGOUT</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SideMenu;

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
    marginBottom: '1%',
  },
  SideMenuIcon: {
    marginLeft: '6%',
    color: BgThemeColor,
  },
  SingleRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#E5E0E0',
    padding: 10,
    marginTop: '8%',
  },
  ItemText: {
    marginLeft: '5%',
    marginTop: '2%',
    fontFamily: 'times',
    color: 'black',
  },
  MenuProfile: {
    height: 80,
    backgroundColor: BgThemeColor,
  },
  ProfileImage: {width: 60, height: 60, borderRadius: 60 / 2},
  Profile: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: '10%',
    marginTop: '2%',
  },
  UserName: {
    color: WhiteBgColor,
    fontFamily: 'times',
  },
  appNameStyle: {
    marginLeft: '10%',
  },
});
