import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {GrayColor, BgThemeColor} from '../../themes/color';
import {UIThemeFont} from '../../themes/fonts';
import {Icon, Text, Item, Input} from 'native-base';
class SearchBar extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    return (
      <>
        <TouchableOpacity
          style={styles.SearchStyle}
          onPress={() => this.setState({modalVisible: true})}>
          <Icon style={styles.IconStyle} name="ios-search" />
          <Text style={styles.textStyles}>Search Entire Women Shop</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 2}}>
            <View>
              <Item>
                <Input placeholder="What are you looking for..." />
              </Item>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </>
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
    borderWidth: 2,
    height: 40,
    borderColor: BgThemeColor,
    borderRadius: 8,
    flexDirection: 'row',
    backgroundColor: GrayColor,
  },
  textStyles: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 12,
    color: BgThemeColor,
    fontFamily: UIThemeFont,
  },
});
