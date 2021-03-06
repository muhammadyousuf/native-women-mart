import React from 'react';
import {StyleSheet, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import {WhiteBgColor} from '../../themes/color';
import {UIThemeFont} from '../../themes/fonts';
const FreeDelivery = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.textName}>Free Delivery On Order Above RS 500</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FreeDelivery;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 30,
  },
  textName: {
    color: WhiteBgColor,
    textAlign: 'center',
    paddingTop: 7,
    fontFamily: UIThemeFont,
    fontSize: 12,
  },
});
