import React from 'react';
import {StyleSheet, View, StatusBar, Platform, Text} from 'react-native';
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
import {BgThemeColor, StatusBarColor, WhiteBgColor} from '../../themes/color';
import {UIThemeFont} from '../../themes/fonts';

class HeaderComponent extends React.Component {
  card = () => {
    this.props.navigation.navigate('Login');
  };
  render() {
    const {navigation} = this.props;
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
            {this.props.navigation.state.routeName === 'Home' ? (
              <View>
                <Title style={styles.headerBodyStyle}>Women</Title>
                <Subtitle style={styles.headerBodyStyle}>---Shop---</Subtitle>
              </View>
            ) : (
              <Title style={styles.headerBodyStyle}>
                {this.props.navigation.state.routeName}
              </Title>
            )}
          </Body>
          <Right>
            <Button transparent onPress={this.card}>
              <Icon name="bell-o" type="FontAwesome" style={styles.iconStyle} />
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
