import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Container, Content, Input, Item, View} from 'native-base';
import Logo from '../assets/images/logo.png';
import {WhiteBgColor, BgThemeColor} from '../themes/color';
import {RalwayBold, UIThemeFont} from '../themes/fonts';
const ForgotPasswordScreen = props => {
  const gotoLogin = () => {
    props.navigation.navigate('Login');
  };

  return (
    <Container style={styles.container}>
      <ScrollView>
        <Image source={Logo} style={styles.ProfileImage} />
        <Content style={styles.contentView}>
          <View style={styles.loginTextView}>
            <Text style={styles.loginText}>Forgot Password</Text>
          </View>
          <View style={styles.inputView}>
            <Item regular style={styles.inputField}>
              <Input placeholder="Email" keyboardType="email-address" />
            </Item>
          </View>
          <TouchableOpacity style={styles.buttonInputStyle} onPress={gotoLogin}>
            <Text style={styles.btnStyle}>Send</Text>
          </TouchableOpacity>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: WhiteBgColor,
  },
  contentView: {
    marginTop: '5%',
    padding: 10,
  },
  ProfileImage: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    borderRadius: 180 / 2,
    marginBottom: '0%',
  },
  inputField: {
    width: '90%',
    marginLeft: '5%',
    borderRadius: 5,
  },
  inputView: {
    marginTop: '8%',
  },
  loginTextView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '8%',
  },
  loginText: {
    fontFamily: RalwayBold,
    fontSize: 18,
  },
  buttonInputStyle: {
    padding: 15,
    backgroundColor: BgThemeColor,
    borderRadius: 10,
    marginTop: 60,
    width: '80%',
    marginLeft: '10%',
    marginBottom: 20,
  },
  btnStyle: {color: WhiteBgColor, textAlign: 'center', fontFamily: UIThemeFont},
});
