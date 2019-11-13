import React, {Component} from 'react';
import {View, Dimensions, Image, StyleSheet, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {SliderBackgroundColor} from '../../themes/color';
const {width} = Dimensions.get('window');
const slides = [
  {
    key: 'somethun',
    image: require('../../assets/images/bags.png'),
    imageStyle: {width, resizeMode: 'contain', height: 280, marginTop: 50},
    backgroundColor: SliderBackgroundColor,
  },
  {
    key: 'somethun-dos',
    image: require('../../assets/images/jwellery.png'),
    backgroundColor: SliderBackgroundColor,
    imageStyle: {width, resizeMode: 'contain', flex: 1},
  },
  {
    key: 'somethun1',
    image: require('../../assets/images/clothes.png'),
    backgroundColor: SliderBackgroundColor,
    imageStyle: {width, resizeMode: 'contain', flex: 1},
  },
  {
    key: 'somethun5',
    image: require('../../assets/images/sandal.png'),
    backgroundColor: SliderBackgroundColor,
    imageStyle: {width, resizeMode: 'contain', flex: 1},
  },
];

export default class MainSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }
  renderItem = item => {
    console.log('item', item);
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
    this.setState({showRealApp: true});
  };

  render() {
    if (this.state.showRealApp) {
      return <MainSlider />;
    } else {
      return (
        <AppIntroSlider
          style={styles.appSliderStyle}
          renderItem={this._renderItem}
          slides={slides}
          onDone={this._onDone}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width,
    height: 200,
    resizeMode: 'cover',
  },
  appSliderStyle: {
    height: 300,
  },
});
