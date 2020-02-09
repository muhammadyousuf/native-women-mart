import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import {UIThemeFont} from '../../themes/fonts';
import {Text} from 'native-base';
const parse = require('../../assets/images/parse.png');
const shoes = require('../../assets/images/shoes.png');
const clothes = require('../../assets/images/cloth.png');
const makeup = require('../../assets/images/makeup.png');
const jwellery = require('../../assets/images/jwel.png');

class TopCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Hand Bag',
          picture: parse,
          qunatity: 15,
        },
        {
          name: 'makeup',
          picture: makeup,
          qunatity: 9,
        },
        {
          name: 'shoes',
          picture: shoes,
          qunatity: 12,
        },
        {
          name: 'clothes',
          picture: clothes,
          qunatity: 5,
        },
        {
          name: 'jwellery',
          picture: jwellery,
          qunatity: 8,
        },
      ],
    };
  }
  renderBestOfTheWeek = data => {
    const {name, picture, qunatity} = data.item;
    return (
      <View>
        <TouchableOpacity
          style={[
            styles.CategoryBox,
            {
              backgroundColor: 'hsl(' + Math.random() * 360 + ', 60%, 88%)',
            },
          ]}>
          <Image source={picture} style={styles.imageStyle} />
        </TouchableOpacity>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.qunatityText}>{qunatity} item</Text>
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
          keyExtractor={(item, index) => index.toString()}
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
    height: 60,
    width: 60,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  imageStyle: {
    height: 60,
    width: 40,
    resizeMode: 'contain',
    marginLeft: 10,
    marginTop: 2,
  },
  text: {
    fontSize: 10,
    fontFamily: UIThemeFont,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  qunatityText: {
    fontSize: 8,
    fontFamily: UIThemeFont,
    textAlign: 'center',
  },
});
