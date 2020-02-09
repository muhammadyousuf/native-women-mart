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
import {UIThemeFont} from '../../themes/fonts';
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
              <Icon style={styles.SideMenuIcon} type="Octicons" name="home" />
              <Text style={styles.ItemText}>HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SingleRow}>
              <Icon
                style={styles.SideMenuIcon}
                type="AntDesign"
                name="calendar"
              />
              <Text style={styles.ItemText}>Category</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.SingleRow}
              onPress={() => navigate('Profile')}>
              <Icon style={styles.SideMenuIcon} type="Entypo" name="user" />
              <Text style={styles.ItemText}>PROFILE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SingleRow}>
              <Icon style={styles.SideMenuIcon} type="Entypo" name="log-out" />
              <Text style={styles.ItemText}>My Order</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SingleRow}>
              <Icon style={styles.SideMenuIcon} type="Entypo" name="log-out" />
              <Text style={styles.ItemText}>Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SingleRow}>
              <Icon style={styles.SideMenuIcon} type="Entypo" name="log-out" />
              <Text style={styles.ItemText}>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SingleRow}>
              <Icon style={styles.SideMenuIcon} type="Entypo" name="log-out" />
              <Text style={styles.ItemText}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SingleRow}>
              <Icon style={styles.SideMenuIcon} type="Entypo" name="log-out" />
              <Text style={styles.ItemText}>LOGOUT</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.footerUnderline} />
        <View style={styles.footer}>
          <Text style={styles.textVersion}>version</Text>
          <Text style={styles.textVersionNumber}>0.01</Text>
        </View>
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
        paddingBottom: 25,
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
    padding: 10,
    marginTop: '3%',
  },
  ItemText: {
    marginLeft: '5%',
    marginTop: '2%',
    fontFamily: UIThemeFont,
    color: 'black',
    fontSize: 13,
  },
  MenuProfile: {
    height: 160,
    backgroundColor: BgThemeColor,
  },
  ProfileImage: {width: 80, height: 80, borderRadius: 80 / 2},
  Profile: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: '5%',
    marginTop: 40,
  },
  UserName: {
    color: WhiteBgColor,
    fontFamily: UIThemeFont,
  },
  appNameStyle: {
    marginLeft: '10%',
  },
  footerUnderline: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  textVersion: {
    fontFamily: UIThemeFont,
    fontWeight: 'bold',
    fontSize: 11,
    marginLeft: 15,
    textTransform: 'uppercase',
  },
  textVersionNumber: {
    textAlign: 'right',
    flex: 1,
    marginRight: 15,
    fontFamily: UIThemeFont,
    fontSize: 11,
    color: BgThemeColor,
  },
  footer: {flexDirection: 'row', marginTop: 10},
});
