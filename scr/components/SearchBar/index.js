import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {GrayColor, BgThemeColor} from '../../themes/color';
import {UIThemeFont} from '../../themes/fonts';
import {Icon, Text} from 'native-base';
class SearchBar extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.SearchStyle}>
        <Icon style={styles.IconStyle} name="ios-search" />
        <Text style={styles.textStyles}>Search Entire Women Shop</Text>
      </TouchableOpacity>
    );
  }
}

export default SearchBar;

const styles = StyleSheet.create({
  IconStyle: {
    marginLeft: '8%',
    color: BgThemeColor,
    fontSize: 20,
    marginTop: 8,
    fontWeight: 'bold',
  },
  SearchStyle: {
    width: '90%',
    marginLeft: '5%',
    marginTop: '4%',
    marginBottom: '5%',
    borderWidth:2,
    height: 40,
    borderColor: BgThemeColor,
    borderRadius: 8,
    flexDirection: 'row',
    backgroundColor:GrayColor,
  },
  textStyles: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 12,
    color: BgThemeColor,
    fontFamily: UIThemeFont,
  },
});
