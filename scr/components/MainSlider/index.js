import React, {Component} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {SliderBackgroundColor} from '../../themes/color';
const {width} = Dimensions.get('window');
const slides = [
  {
    key: 'bags',
    image: require('../../assets/images/bags.png'),
    imageStyle: {width, resizeMode: 'contain', height: 200, marginTop: 50},
    backgroundColor: SliderBackgroundColor,
  },
  {
    key: 'jwellery',
    image: require('../../assets/images/jwellery.png'),
    backgroundColor: SliderBackgroundColor,
    imageStyle: {width, resizeMode: 'contain', height: 200, marginTop: 50},
  },
  {
    key: 'clothes',
    image: require('../../assets/images/clothes.jpg'),
    backgroundColor: SliderBackgroundColor,
    imageStyle: {width, resizeMode: 'contain', height: 200, marginTop: 50},
  },
  {
    key: 'sandal',
    image: require('../../assets/images/sandal.png'),
    backgroundColor: SliderBackgroundColor,
    imageStyle: {width, resizeMode: 'contain', height: 200, marginTop: 50},
  },
];
let index = 0;
export default class MainSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }
  componentDidMount() {
    this.startCarousel();
  }

  startCarousel = () => {
    this.carouselInterval = setInterval(() => {
      this._onDone();
    }, 3000);
  };

  componentWillUnmount() {
    clearInterval(this.carouselInterval);
  }

  _onDone = () => {
    if (slides.length === index) {
      index = 0;
    } else {
      this.AppIntroSlider.goToSlide(index);
      index++;
    }
  };

  render() {
    if (this.state.showRealApp) {
      return <MainSlider />;
    } else {
      return (
        <AppIntroSlider
          ref={ref => (this.AppIntroSlider = ref)}
          style={styles.appSliderStyle}
          slides={slides}
          showNextButton={false}
          showDoneButton={false}
          onSlideChange={this._onDone}
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
    height: 200,
  },
});
