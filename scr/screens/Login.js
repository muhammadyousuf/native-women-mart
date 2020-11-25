import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Container, Content, Input, Item, Icon, View} from 'native-base';
import Logo from '../assets/images/logo.png';
import {WhiteBgColor, BgThemeColor, blueColor} from '../themes/color';
import {RalwayBold, UIThemeFont} from '../themes/fonts';
const LoginScreen = props => {
  const gotoSignup = () => {
    props.navigation.navigate('Signup');
  };
  const gotoForgot = () => {
    props.navigation.navigate('forgotPassword');
  };
  const [passSecure, setpassSecure] = useState(true);
  return (
    <Container style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <Image source={Logo} style={styles.ProfileImage} />
        <Content style={styles.contentView}>
          <View style={styles.loginTextView}>
            <Text style={styles.loginText}>Login With Email and Password</Text>
          </View>
          <View style={styles.inputView}>
            <Item regular style={styles.inputField}>
              <Input placeholder="Email" keyboardType="email-address" />
            </Item>
          </View>
          <View style={styles.inputView}>
            <Item regular style={styles.inputField}>
              <Input placeholder="Password" secureTextEntry={passSecure} />
              <Icon
                name={passSecure ? 'eye-closed' : 'eye'}
                type="Octicons"
                onPress={() => setpassSecure(!passSecure)}
              />
            </Item>
          </View>
          <TouchableOpacity style={styles.forgotView} onPress={gotoForgot}>
            <Text style={styles.forgotStyle}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonInputStyle}>
            <Text style={styles.btnStyle}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupTextView}>
            <Text style={styles.accountStyle}>
              Don't have an account?
              <Text onPress={gotoSignup} style={styles.signupText}>
                {' '}
                Signup
              </Text>
            </Text>
          </TouchableOpacity>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: WhiteBgColor,
  },
  contentView: {
    marginTop: '8%',
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
  accountStyle: {
    textAlign: 'center',
    fontFamily: UIThemeFont,
  },
  signupText: {
    color: blueColor,
    fontFamily: UIThemeFont,
  },
  forgotStyle: {
    fontFamily: UIThemeFont,
    color: blueColor,
    fontSize: 12,
    textAlign: 'right',
  },
  forgotView: {
    marginTop: 10,
    marginRight: '5%',
  },
  signupTextView: {
    marginBottom: '2%',
  },
});
