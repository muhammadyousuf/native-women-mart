import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/HeaderComponent';

const photos = [
  {
    label: 'beach',
    src: require('../assets/images/bags.png'),
  },
  {
    label: 'bridge',
    src: require('../assets/images/cloth.png'),
  },
  {
    label: 'fields',
    src: require('../assets/images/clothes.jpg'),
  },
  {
    label: 'mountains',
    src: require('../assets/images/shoes.png'),
  },
  {
    label: 'sunflower',
    src: require('../assets/images/sandal.png'),
  },
  {
    label: 'sunflower',
    src: require('../assets/images/makeup.png'),
  },
  //   {
  //     label: 'sunset',
  //     src: require('../images/sunset.jpg'),
  //   },
  //   {
  //     label: 'lake',
  //     src: require('../images/lake.jpg'),
  //   },
  //   {
  //     label: 'nature',
  //     src: require('../images/nature.jpg'),
  //   },
  //   {
  //     label: 'pink',
  //     src: require('../images/pink.jpg'),
  //   },
  //   {
  //     label: 'rails',
  //     src: require('../images/rails.jpg'),
  //   },
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
        {/* <View style={styles.textView}> */}
        {/* <Text style={styles.boxTextBottom}>{item[0].label}</Text> */}
        {/* </View> */}

        {/* <View>
          <View style={styles.viewText}>
            <Text style={styles.boxTextBottom}>{item[0].label}</Text>
          </View>

          <View style={styles.viewText}>
            <Text style={styles.boxTextBottom}>{item[1].label}</Text>
          </View>
        </View> */}
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
      {/* <Header /> */}
      <View style={styles.container}>
        <ScrollView style={styles.gallery}>{renderGallery()}</ScrollView>
        {/* <View style={styles.tabs} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  gallery: {
    // flexDirection: 'column',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // marginBottom: '2%',
    width: '100%',
    // alignSelf: 'center',
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
    // backgroundColor: 'yellow',
    marginBottom: 5,
  },
  boxView: {
    width: '100%',
    height: 180,
    // backgroundColor: 'red',
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
    // marginBottom: 5,
    marginTop: 15,
    // marginRight: 10,
  },
  boxImage: {
    height: '80%',
    width: '80%',
  },
  boxTextBottom: {
    width: '100%',
    fontSize: 11,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: '400',
  },
  //   tabs: {
  //     flexDirection: 'row',
  //     backgroundColor: '#333',
  //     padding: 20,
  //   },
  //   tab: {
  //     flex: 1,
  //   },
  //   icon: {
  //     textAlign: 'center',
  //   },
  //   item: {
  //     flex: 1,
  //     flexDirection: 'row',
  //   },
  //   photo: {
  //     width: 100,
  //     height: 100,
  //     // flex: 1,
  //   },
});
