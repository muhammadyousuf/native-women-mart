import React from 'react';
import {StyleSheet, View, StatusBar, Platform} from 'react-native';
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
import {BgThemeColor, StatusBarColor} from '../../themes/color';
import {UIThemeFont} from '../../themes/fonts';

class HeaderComponent extends React.Component {
  render() {
    const {navigation} = this.props;

    console.log('navigation', this.props.navigation.state.routeName);
    return (
      <View style={styles.container}>
        <Header
          style={{backgroundColor: BgThemeColor}}
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
            <Title style={styles.headerBodyStyle}>
              {this.props.navigation.state.routeName === 'Home'
                ? 'Woman'
                : this.props.navigation.state.routeName}
            </Title>
            <Subtitle style={styles.headerBodyStyle}>
              {this.props.navigation.state.routeName === 'Home'
                ? '---Shop---'
                : this.props.navigation.state.routeName}
            </Subtitle>
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
      </View>
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
    fontFamily: UIThemeFont,
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
