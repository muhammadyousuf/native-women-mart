import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {GrayColor, BgThemeColor} from '../../themes/color';
import {UIThemeFont} from '../../themes/fonts';
import {Icon, Text} from 'native-base';
const parse = require('../../assets/images/parse.png');
const shoes = require('../../assets/images/shoes.png');
const clothes = require('../../assets/images/clothes.jpg');
const jwel = require('../../assets/images/jwel.png');
const jwellery = require('../../assets/images/jwellery.png');
const sandal = require('../../assets/images/sandal.png');
class TopCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Hand Bag',
          picture: parse,
        },
        {
          name: 'Hand Bag',
          picture: shoes,
        },
        {
          name: 'Hand Bag',
          picture: clothes,
        },
        {
          name: 'Hand Bag',
          picture: jwellery,
        },
        {
          name: 'Hand Bag',
          picture: jwel,
        },
        {
          name: 'Hand Bag',
          picture: sandal,
        },
      ],
    };
  }
  renderBestOfTheWeek = data => {
    console.log('working', data);
    return (
      <View>
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
          <Image source={data.item.picture} style={styles.imageStyle} />
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <>
        <Text style={styles.headingStyle}>Shop By Category</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={this.state.data}
          horizontal={true}
          renderItem={this.renderBestOfTheWeek}
        />
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
    marginLeft: 10,
  },
  imageStyle: {
    height: 60,
    width: 40,
    resizeMode: 'contain',
    marginLeft: 10,
    marginTop: 10,
  },
});
