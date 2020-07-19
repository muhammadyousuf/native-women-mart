import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import {UIThemeFont} from '../../themes/fonts';
import {BgThemeColor} from '../../themes//color';
import {Text, Icon} from 'native-base';
const clothes3 = require('../../assets/images/clothes3.webp');
const clothes4 = require('../../assets/images/clothes4.jpg');
const clothes2 = require('../../assets/images/clothes2.webp');
const clothes5 = require('../../assets/images/clothes5.jpg');
const clothes6 = require('../../assets/images/clothes6.jpg');
const clothes7 = require('../../assets/images/clothes7.jpg');
const clothes = require('../../assets/images/clothes.jpg');
const shoes1 = require('../../assets/images/shoes1.jpg');
const shoes2 = require('../../assets/images/shoes2.jpg');
const shoes3 = require('../../assets/images/shoes3.jpg');
const handbag1 = require('../../assets/images/handbag1.jpg');
const handbag2 = require('../../assets/images/handbag2.jpg');
const jwellery1 = require('../../assets/images/jwellery1.jpg');
const jwellery2 = require('../../assets/images/jwellery2.jpg');
const makeup1 = require('../../assets/images/makeup.jpg');
const makeup2 = require('../../assets/images/makeup2.jpg');
class NewArrivalBestSeller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: 'Lawn Embroidered Suits UnStitched',
          picture: clothes2,
          price: 3500,
        },
        {
          id: 2,
          name: 'Lawn Embroidery Dress Chiffon Duppata',
          picture: clothes7,
          price: 2250,
        },
        {
          id: 3,
          name: 'Handbag Black Foam',
          picture: handbag1,
          price: 950,
        },
        {
          id: 4,
          name: 'Red Lipstick and Liner',
          picture: makeup1,
          price: 720,
        },
        {
          id: 5,
          name: 'Brown Gold Necklace 3 Tola',
          picture: jwellery1,
          price: 324000,
        },
        {
          id: 6,
          name: 'Lawn Chikankari Heavy Embroidered Dress',
          picture: clothes6,
          price: 8500,
        },
        {
          id: 7,
          name: 'Brown Peshawari Sandal',
          picture: shoes1,
          price: 2200,
        },
        {
          id: 8,
          name: '36 Inch Soft Red Bra',
          picture: clothes5,
          price: 450,
        },
        {
          id: 9,
          name: 'Bangles Gold 2 Tola',
          picture: jwellery2,
          price: 218000,
        },
        {
          id: 10,
          name: 'Printed Cotton Kurti',
          picture: clothes3,
          price: 1450,
        },
        {
          id: 11,
          name: 'Classic Printed Lawn',
          picture: clothes4,
          price: 1800,
        },
        {
          id: 12,
          name: 'Large Makeup Kit',
          picture: makeup2,
          price: 2400,
        },
        {
          id: 13,
          name: 'Luxury Embroidered Chikankari Lawn',
          picture: clothes,
          price: 90500,
        },
        {
          id: 14,
          name: 'Gray Stylish and Comfort Shoes',
          picture: shoes2,
          price: 1800,
        },
        {
          id: 15,
          name: 'Handbag Gray Foam',
          picture: handbag2,
          price: 1200,
        },
        {
          id: 16,
          name: 'Large Heel Strappy Sandal',
          picture: shoes3,
          price: 3500,
        },
      ],
      cardItem: [],
    };
  }
  handleCardSave = id => {
    let index;
    const {cardItem} = this.state;
    if (cardItem.includes(id)) {
      index = cardItem.indexOf(parseInt(id, 10));
      cardItem.splice(index, 1);
    } else {
      cardItem.push(id);
    }

    this.setState({
      cardItem: cardItem,
    });
  };
  renderBestOfTheWeek = data => {
    const {name, picture, price, id} = data.item;
    const {cardItem} = this.state;
    return (
      <View>
        <TouchableOpacity style={styles.CategoryBox}>
          <Image source={picture} style={styles.imageStyle} />
          <View style={styles.priceHeartView}>
            <Text style={styles.priceText}>Rs {price}</Text>
            <Icon
              onPress={() => this.handleCardSave(id)}
              name={!cardItem.includes(id) ? 'heart-o' : 'heart'}
              type="FontAwesome"
              style={styles.heartIconStyle}
            />
          </View>
          <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <>
        <Text style={styles.headingStyle}>{this.props.name}</Text>
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

export default NewArrivalBestSeller;

const styles = StyleSheet.create({
  headingStyle: {
    fontFamily: UIThemeFont,
    marginLeft: '3%',
    marginTop: '5%',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  CategoryBox: {
    height: 280,
    width: 160,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    marginTop: 5,
    padding: 0,
    marginBottom: 15,
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
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
    marginLeft: 0,
    marginTop: 0,
    borderRadius: 2,
  },
  text: {
    fontSize: 10,
    fontFamily: UIThemeFont,
    textAlign: 'center',
    textTransform: 'capitalize',
    marginLeft: 5,
    marginTop: 15,
    marginRight: 5,
    padding: 2,
    letterSpacing: 0.2,
    color: '#909090',
  },
  priceText: {
    fontSize: 12,
    fontFamily: UIThemeFont,
    marginTop: 10,
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#909090',
  },
  heartIconStyle: {
    color: BgThemeColor,
    position: 'absolute',
    right: 10,
    marginTop: 6,
  },
  priceHeartView: {flexDirection: 'row'},
});
