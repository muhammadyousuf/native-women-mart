import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {GrayColor, BgThemeColor} from '../../themes/color';
import {UIThemeFont} from '../../themes/fonts';
import {Icon, Text} from 'native-base';
class TopCategories extends React.Component {
  render() {
    return (
      <>
        <Text style={styles.headingStyle}>Shop By Category</Text>
        <TouchableOpacity
          style={[
            styles.CategoryBox,
            {
              backgroundColor:
                'rgba(' +
                Math.floor(Math.random() * 256) +
                ',' +
                Math.floor(Math.random() * 256) +
                ',' +
                Math.floor(Math.random() * 256) +
                ',' +
                0.5 +
                ')',
            },
          ]}>
          <Image
            source={require('../../assets/images/parse.png')}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.CategoryBox,
            {
              backgroundColor:
                'rgba(' +
                Math.floor(Math.random() * 256) +
                ',' +
                Math.floor(Math.random() * 256) +
                ',' +
                Math.floor(Math.random() * 256) +
                ',' +
                0.5 +
                ')',
            },
          ]}>
          <Image
            source={require('../../assets/images/cloth.png')}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
      </>
    );
  }
}

export default TopCategories;

const styles = StyleSheet.create({
  headingStyle: {
    fontFamily: UIThemeFont,
    marginLeft: '3%',
    marginTop: '5%',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  CategoryBox: {
    height: 80,
    width: 60,
    marginLeft: '3%',
  },
  imageStyle: {
    height: 60,
    width: 40,
    resizeMode: 'contain',
    marginLeft: 10,
    marginTop: 10,
  },
});
