import React, {useState} from 'react';
import {Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Container, Content, Input, Item, Icon, View, Text} from 'native-base';
import Logo from '../assets/images/logo.png';
import {WhiteBgColor, BgThemeColor, blueColor} from '../themes/color';
import {RalwayBold, UIThemeFont} from '../themes/fonts';

const SignupScreen = props => {
  const gotoLogin = () => {
    props.navigation.navigate('Login');
  };
  const [passSecure, setpassSecure] = useState(true);
  return (
    <Container style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={Logo} style={styles.ProfileImage} />
        <Content style={styles.contentView}>
          <View style={styles.signTextView}>
            <Text style={styles.signText}>Create New Account</Text>
          </View>
          <View style={styles.inputView}>
            <Item regular style={styles.inputField}>
              <Input placeholder="Name" />
            </Item>
          </View>
          <View style={styles.inputView}>
            <Item regular style={styles.inputField}>
              <Input placeholder="Email" keyboardType="email-address" />
            </Item>
          </View>
          <View style={styles.inputView}>
            <Item regular style={styles.inputField}>
              <Input placeholder="Phone" keyboardType="phone-pad" />
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
          <TouchableOpacity style={styles.buttonInputStyle}>
            <Text style={styles.btnStyle}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupTextView}>
            <Text style={styles.accountStyle}>
              Already have an account?
              <Text style={styles.signupText} onPress={gotoLogin}>
                {' '}
                Login
              </Text>
            </Text>
          </TouchableOpacity>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: WhiteBgColor,
  },
  contentView: {padding: 10},
  ProfileImage: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    borderRadius: 180 / 2,
    marginBottom: '1%',
  },
  inputField: {
    width: '90%',
    marginLeft: '5%',
    borderRadius: 5,
  },
  inputView: {
    marginTop: '5%',
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
  signupTextView: {
    marginBottom: '2%',
  },
  signTextView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '8%',
  },
  signText: {
    fontFamily: RalwayBold,
    fontSize: 24,
  },
});
