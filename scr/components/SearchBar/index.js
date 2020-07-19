/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Modal} from 'react-native';
import {GrayColor, BgThemeColor} from '../../themes/color';
import {UIThemeFont} from '../../themes/fonts';
import {Icon, Text, Item, Input} from 'native-base';

const SearchBar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const setModalVisibleFunc = visible => {
    setModalVisible(visible);
    setSearchValue('');
  };

  return (
    <>
      <TouchableOpacity
        style={styles.SearchStyle}
        onPress={() => setModalVisible(true)}>
        <Icon style={styles.IconStyle} name="ios-search" />
        <Text style={styles.textStyles}>Search Entire Women Shop</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisibleFunc(!modalVisible);
        }}>
        <View style={{marginTop: 2}}>
          <View>
            <Item>
              <Icon
                name="left"
                type="AntDesign"
                style={styles.iconColor}
                onPress={() => {
                  setModalVisibleFunc(!modalVisible);
                }}
              />
              <Input
                placeholder="What are you looking for..."
                placeholderTextColor={'gray'}
                value={searchValue}
                style={styles.inputSearch}
                onChangeText={val => setSearchValue(val)}
              />
              {searchValue ? (
                <Icon
                  name="closecircle"
                  style={styles.iconColor}
                  type="AntDesign"
                  onPress={() => setSearchValue('')}
                />
              ) : null}
            </Item>
          </View>
        </View>
      </Modal>
    </>
  );
};

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
    borderWidth: 2,
    height: 40,
    borderColor: BgThemeColor,
    borderRadius: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: GrayColor,
  },
  textStyles: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 12,
    color: 'black',
    fontFamily: UIThemeFont,
  },
  inputSearch: {
    fontFamily: UIThemeFont,
    fontSize: 13,
  },
  iconColor: {
    color: BgThemeColor,
    fontSize: 25,
    marginLeft: 10,
  },
});
