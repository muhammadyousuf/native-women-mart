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
const parse = require('../../assets/images/clothes3.webp');
const shoes = require('../../assets/images/clothes4.jpg');
const clothes = require('../../assets/images/clothes2.webp');
const makeup = require('../../assets/images/clothes.jpg');
const jwellery = require('../../assets/images/shoes1.jpg');

class NewArrival extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Hand Bag',
          picture: parse,
          price: 800,
        },
        {
          name: 'makeup',
          picture: makeup,
          price: 1450,
        },
        {
          name: 'shoes',
          picture: shoes,
          price: 2000,
        },
        {
          name: 'clothes',
          picture: clothes,
          price: 5500,
        },
        {
          name: 'jwellery',
          picture: jwellery,
          price: 90500,
        },
      ],
    };
  }
  renderBestOfTheWeek = data => {
    const {name, picture, price} = data.item;
    return (
      <View>
        <TouchableOpacity style={styles.CategoryBox}>
          <Image source={picture} style={styles.imageStyle} />
          <Text style={styles.priceText}>Rs {price}</Text>
          <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <>
        <Text style={styles.headingStyle}>New Arrival</Text>
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

export default NewArrival;

const styles = StyleSheet.create({
  headingStyle: {
    fontFamily: UIThemeFont,
    marginLeft: '3%',
    marginTop: '5%',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  CategoryBox: {
    height: 270,
    width: 160,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    marginTop: 5,
    padding: 0,
    borderColor: '#d9d9d9',
    borderWidth: 1,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  imageStyle: {
    alignSelf: 'center',
    //height:'100%',
    width: '100%',
    height: 200,
    // backgroundColor: 'red',
    //width: 158,
    resizeMode: 'stretch',
    marginLeft: 0,
    marginTop: 0,
    borderRadius: 5,
  },
  text: {
    fontSize: 10,
    fontFamily: UIThemeFont,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    marginTop: 15,
  },
  priceText: {
    fontSize: 12,
    fontFamily: UIThemeFont,
    marginTop: 10,
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
