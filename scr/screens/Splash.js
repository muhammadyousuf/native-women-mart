import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Logo from '../assets/images/logo.png';
import {BgThemeColor} from '../themes/color';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.ProfileImage} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BgThemeColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ProfileImage: {width: 180, height: 180, borderRadius: 180 / 2},
});
