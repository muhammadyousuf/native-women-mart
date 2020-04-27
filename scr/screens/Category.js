import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const photos = [
  {
    label: 'Ladies Dress',
    src: require('../assets/images/dress.png'),
  },
  {
    label: 'Hand Bags',
    src: require('../assets/images/handbags.png'),
  },
  {
    label: 'Jewellery',
    src: require('../assets/images/jwel.png'),
  },
  {
    label: 'Shoes',
    src: require('../assets/images/shoe.png'),
  },
  {
    label: 'Make Up',
    src: require('../assets/images/makeup.png'),
  },
  {
    label: 'Parse',
    src: require('../assets/images/parse.png'),
  },
];

const renderGallery = () => {
  var count = 0;
  var previous_item = '';
  var pairs = getPairsArray(photos);
  return pairs.map((item, index) => {
    return (
      <View style={styles.item} key={index}>
        <View style={styles.rowView}>
          <View style={styles.mainBox}>
            <TouchableOpacity style={styles.boxView}>
              <Image style={styles.boxImage} source={item[0].src} />
            </TouchableOpacity>
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontFamily: 'Raleway-Italic',
                  fontWeight: '600',
                  textTransform: 'capitalize',
                }}>
                {item[0].label}
              </Text>
            </View>
          </View>
          <View style={styles.mainBox}>
            <TouchableOpacity style={styles.boxView}>
              <Image style={styles.boxImage} source={item[1].src} />
            </TouchableOpacity>
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '600',
                  textTransform: 'capitalize',
                }}>
                {item[1].label}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  });
};

const getPairsArray = photos => {
  var pairs_r = [];
  var pairs = [];
  var count = 0;
  photos.forEach(item => {
    count += 1;
    pairs.push(item);
    if (count == 2) {
      pairs_r.push(pairs);
      count = 0;
      pairs = [];
    }
  });
  return pairs_r;
};
export const Category = () => {
  return (
    <View>
      <View style={styles.container}>
        <ScrollView style={styles.gallery}>{renderGallery()}</ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  gallery: {marginBottom: '5%'},
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  textView: {
    flexDirection: 'row',
    width: '91%',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    marginBottom: '1.5%',
  },
  mainBox: {
    width: '42%',
    height: 220,
    marginBottom: 5,
  },
  boxView: {
    width: '100%',
    height: 180,
    backgroundColor: 'hsl(' + Math.random() * 270 + ', 90%, 98%)',
    shadowColor: '#000',
    paddingHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 13,
    },

    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  boxImage: {
    height: '55%',
    width: '70%',
  },
  boxTextBottom: {
    width: '100%',
    fontSize: 11,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: '400',
  },
});
