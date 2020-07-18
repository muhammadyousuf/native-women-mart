import React, {Component} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {WhiteBgColor} from '../../themes/color';
const {width} = Dimensions.get('window');
const slides = [
  {
    key: 'bags',
    image: require('../../assets/images/bags.png'),
    imageStyle: {
      width: width - width / 4,
      resizeMode: 'stretch',
      height: 200,
      marginTop: 50,
    },
    backgroundColor: WhiteBgColor,
  },
  {
    key: 'jwellery',
    image: require('../../assets/images/jwellery.png'),
    backgroundColor: WhiteBgColor,
    imageStyle: {
      width: width - width / 4,
      resizeMode: 'stretch',
      height: 200,
      marginTop: 50,
    },
  },
  {
    key: 'clothes',
    image: require('../../assets/images/clothes.jpg'),
    backgroundColor: WhiteBgColor,
    imageStyle: {
      width: width - width / 4,
      resizeMode: 'stretch',
      height: 200,
      marginTop: 50,
    },
  },
  {
    key: 'sandal',
    image: require('../../assets/images/sandal.png'),
    backgroundColor: WhiteBgColor,
    imageStyle: {
      width: width - width / 4,
      resizeMode: 'stretch',
      height: 200,
      marginTop: 50,
    },
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
    resizeMode: 'stretch',
  },
  appSliderStyle: {
    height: 200,
  },
});
