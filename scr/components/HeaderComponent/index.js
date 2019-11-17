import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar, Platform} from 'react-native';
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Subtitle,
} from 'native-base';
import {HeaderThemeColor, StatusBarColor} from '../../themes/color';
import {HeaderThemeFont} from '../../themes/fonts';
class HeaderComponent extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Header
          style={{backgroundColor: HeaderThemeColor}}
          androidStatusBarColor={StatusBarColor}>
          <Left style={styles.leftStyle}>
            <Button onPress={() => navigation.toggleDrawer()} transparent>
              <Icon
                type="MaterialCommunityIcons"
                style={styles.iconStyle}
                name="menu"
              />
            </Button>
          </Left>
          <Body style={styles.bodyStyle}>
            <Title style={styles.headerBodyStyle}>Women</Title>
            <Subtitle style={styles.headerBodyStyle}>---Shop---</Subtitle>
          </Body>
          <Right>
            <Button transparent>
              <Icon
                name="shopping-cart"
                type="FontAwesome"
                style={styles.iconStyle}
              />
            </Button>
          </Right>
        </Header>
      </SafeAreaView>
    );
  }
}

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
  },
  headerBodyStyle: {
    fontFamily: HeaderThemeFont,
  },
  iconStyle: {
    fontSize: 30,
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
