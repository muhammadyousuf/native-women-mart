import React from 'react';
import {StyleSheet, View, StatusBar, Platform} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
} from 'native-base';
import {BgThemeColor, WhiteBgColor} from '../../themes/color';
import {UIThemeFont} from '../../themes/fonts';

class FooterComponent extends React.Component {
  card = () => {
    this.props.navigation.navigate('Login');
  };
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Footer>
          <FooterTab>
            <Button>
              <Text>Apps</Text>
            </Button>
            <Button>
              <Text>Camera</Text>
            </Button>
            <Button active>
              <Text>Navigate</Text>
            </Button>
            <Button>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}

export default FooterComponent;

const styles = StyleSheet.create({
  headerBodyStyle: {
    fontFamily: UIThemeFont,
    color: WhiteBgColor,
  },
  iconStyle: {
    fontSize: 25,
    color: WhiteBgColor,
  },
  bodyStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftStyle: {
    flex: 1,
  },
});
