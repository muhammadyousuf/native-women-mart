import React from 'react';
import {TouchableOpacity, Image, StyleSheet, StatusBar} from 'react-native';
import {Text, View, Icon, Title, Subtitle} from 'native-base';
import {BgThemeColor, WhiteBgColor} from '../../themes/color';
import {UIThemeFont} from '../../themes/fonts';
import Logo from '../../assets/images/logo.png';
const SideMenu = props => {
  const {navigate} = props.navigation;
  return (
    <View style={styles.container}>
      <View style={styles.mainIconStyle}>
        <TouchableOpacity style={styles.touchLogo}>
          <Image source={Logo} style={styles.ProfileImage} />
          <View style={styles.appNameStyle}>
            <Title style={styles.UserName}>Women</Title>
            <Subtitle style={styles.UserName}>---Shop---</Subtitle>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.viewMenuOption}>
        <TouchableOpacity
          style={styles.SingleRow}
          onPress={() => navigate('Home')}>
          <View style={styles.optionStyle}>
            <Icon style={styles.SideMenuIcon} type="FontAwesome" name="home" />
            <Text style={styles.ItemText}>HOME</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.SingleRow}
          onPress={() => navigate('Category')}>
          <View style={styles.optionStyle}>
            <Icon style={styles.SideMenuIcon} type="FontAwesome" name="list" />
            <Text style={styles.ItemText}>Category</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.SingleRow}
          onPress={() => navigate('Profile')}>
          <View style={styles.optionStyle}>
            <Icon style={styles.SideMenuIcon} type="FontAwesome" name="user" />
            <Text style={styles.ItemText}>PROFILE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SingleRow}>
          <View style={styles.optionStyle}>
            <Icon
              style={styles.SideMenuIcon}
              type="FontAwesome"
              name="shopping-cart"
            />
            <Text style={styles.ItemText}>My Order</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SingleRow}>
          <View style={styles.optionStyle}>
            <Icon style={styles.SideMenuIcon} type="FontAwesome" name="cogs" />
            <Text style={styles.ItemText}>Setting</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SingleRow}>
          <View style={styles.optionStyle}>
            <View style={styles.optionStyle}>
              <Icon
                style={styles.SideMenuIcon}
                type="FontAwesome"
                name="question-circle"
              />
              <Text style={styles.ItemText}>Help</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SingleRow}>
          <View style={styles.optionStyle}>
            <Icon
              style={styles.SideMenuIcon}
              type="AntDesign"
              name="contacts"
            />
            <Text style={styles.ItemText}>Contact Us</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SingleRow}>
          <View style={styles.optionStyle}>
            <Icon style={styles.SideMenuIcon} type="AntDesign" name="logout" />
            <Text style={styles.ItemText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footerStyle}>
        <View style={styles.footerUnderline} />
        <View style={styles.footer}>
          <Text style={styles.textVersion}>version</Text>
          <Text style={styles.textVersionNumber}>1.0</Text>
        </View>
      </View>
    </View>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  container: {width: '100%', flex: 1, backgroundColor: WhiteBgColor},
  MenuProfile: {
    height: 160,
    backgroundColor: BgThemeColor,
  },
  ProfileImage: {width: 80, height: 80, borderRadius: 80 / 2},
  Profile: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },
  SingleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  SideMenuIcon: {
    color: BgThemeColor,
  },
  ItemText: {
    marginLeft: '5%',
    fontFamily: UIThemeFont,
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  footerUnderline: {
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    paddingTop: '1%',
  },
  footer: {
    flexDirection: 'row',
    paddingTop: '2%',
  },
  textVersionNumber: {
    textAlign: 'right',
    flex: 1,
    marginRight: 15,
    fontFamily: UIThemeFont,
    fontSize: 15,
    color: BgThemeColor,
  },
  textVersion: {
    fontFamily: UIThemeFont,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 15,
    textTransform: 'uppercase',
  },
  UserName: {
    color: WhiteBgColor,
  },
  appNameStyle: {
    paddingBottom: '2%',
  },
  viewMenuOption: {
    flex: 0.8,
    justifyContent: 'space-evenly',
    padding: '5%',
  },
  optionStyle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  footerStyle: {
    flex: 0.05,
    justifyContent: 'center',
  },
  touchLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '2%',
  },
  mainIconStyle: {
    flex: 0.2,
    backgroundColor: BgThemeColor,
    marginTop: StatusBar.currentHeight,
    paddingBottom: '2%',
  },
});
