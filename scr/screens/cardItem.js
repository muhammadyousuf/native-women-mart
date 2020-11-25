import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {BgThemeColor, WhiteBgColor} from '../themes/color';
import {RalwayBold} from '../themes/fonts';
import ImageView from 'react-native-image-viewing';
const width = Dimensions.get('window').width;

const CardItemScreen = props => {
  const [visible, setIsVisible] = useState(false);
  const {goBack} = props.navigation;
  const images = [props.navigation.state.params.picture];
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cardBox}
        onPress={() => setIsVisible(true)}>
        <Image
          style={styles.imgStyle}
          source={props.navigation.state.params.picture}
        />
      </TouchableOpacity>
      <ImageView
        images={images}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
      <TouchableOpacity style={styles.btnAddCart} onPress={() => goBack()}>
        <Text style={styles.btnAddCartText}>ADD CARD</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardItemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardBox: {
    height: 350,
    width: width,
    borderRadius: 5,
    marginTop: 0,
    padding: 0,
    marginBottom: 15,
    borderColor: '#d9d9d9',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  btnAddCart: {
    width: '50%',
    height: '5%',
    marginLeft: '25%',
  },

  btnAddCartText: {
    backgroundColor: BgThemeColor,
    padding: 15,
    color: WhiteBgColor,
    fontFamily: RalwayBold,
    textAlign: 'center',
    opacity: 0.9,
    borderRadius: 5,
  },
  imgStyle: {
    width: width - 30,
    height: 280,
    resizeMode: 'stretch',
    marginLeft: 15,
    borderRadius: 5,
    marginTop: 15,
  },
});
