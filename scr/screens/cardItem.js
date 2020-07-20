import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import ImageView from 'react-native-image-viewing';
const clothes3 = require('../assets/images/clothes3.webp');
const images = [
  clothes3,
  {
    uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
  },
];

const CardItemScreen = props => {
  const [visible, setIsVisible] = useState(false);
  const {goBack} = props.navigation;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        <Image style={{width: 300, height: 200}} source={clothes3} />
      </TouchableOpacity>
      <ImageView
        images={images}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
      <Button title="go to home" onPress={() => goBack()} />
    </View>
  );
};

export default CardItemScreen;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});
