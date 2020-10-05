import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
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
          style={{
            width: width - 30,
            height: 280,
            resizeMode: 'stretch',
            marginLeft: 15,
            borderRadius: 5,
            marginTop: 15,
          }}
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
        <Text style={styles.loginButton}>ADD CARD</Text>
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
    // borderWidth: 1,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  btnAddCart: {
    width: '40%',
    height: '5%',
    marginLeft: '30%',
  },

  loginButton: {
    backgroundColor: 'red',
    padding: 15,
    color: 'white',
    textAlign: 'center',
  },
});
