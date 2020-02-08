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
          name: 'makeup',
          picture: makeup,
        },
        {
          name: 'shoes',
          picture: shoes,
        },
        {
          name: 'clothes',
          picture: clothes,
        },
        {
          name: 'jwellery',
          picture: jwellery,
        },

        {
          name: 'sandal',
          picture: sandal,
        },
      ],
    };
  }
  renderBestOfTheWeek = data => {
    const {name, picture} = data.item;
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
          <Text style={styles.text}>{name}</Text>
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
    height: 90,
    width: 60,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  imageStyle: {
    height: 60,
    width: 40,
    resizeMode: 'contain',
    marginLeft: 10,
    marginTop: 5,
  },
  text: {
    fontSize: 10,
    fontFamily: UIThemeFont,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
