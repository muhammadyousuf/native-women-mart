import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Container, Content, Input, Item, Icon} from 'native-base';
import Logo from '../assets/images/logo.png';
import {WhiteBgColor} from '../themes/color';

const LoginScreen = () => {
  const [passSecure, setpassSecure] = useState(true);
  return (
    <Container style={styles.container}>
      <Content style={styles.contentView}>
        <Image source={Logo} style={styles.ProfileImage} />
        <Item regular style={styles.inputField}>
          <Input placeholder="Email" keyboardType="email-address" />
        </Item>
        <Item regular style={styles.inputField}>
          <Input placeholder="Password" secureTextEntry={passSecure} />
          <Icon
            name={passSecure ? 'eye-closed' : 'eye'}
            type="Octicons"
            onPress={() => setpassSecure(!passSecure)}
          />
        </Item>
      </Content>
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: WhiteBgColor,
  },
  contentView: {marginTop: '10%'},
  ProfileImage: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    borderRadius: 180 / 2,
    marginBottom: '10%',
  },
  inputField: {
    width: '90%',
    marginLeft: '5%',
    borderRadius: 5,
    marginTop: '10%',
  },
});
