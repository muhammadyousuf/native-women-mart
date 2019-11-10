import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {Header, Left, Body, Right, Button, Icon, Title, Subtitle} from 'native-base';
import {HeaderThemeColor} from '../../themes/color';
class HeaderComponent extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Header
          style={{backgroundColor: HeaderThemeColor}}
          androidStatusBarColor={HeaderThemeColor} >
          <Left style={{flex: 1}}>
            <Button onPress={() => navigation.toggleDrawer()} transparent>
              <Icon
                type="MaterialCommunityIcons"
                style={{fontSize: 30}}
                name="menu"
              />
            </Button>
          </Left>
          <Body
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Title style={{fontFamily:'times'}} >Women</Title>
            <Subtitle style={{fontFamily:'times'}} >---Shop---</Subtitle>
          </Body>
          <Right>
            <Button transparent>
              <Icon
                name="shopping-cart"
                type="FontAwesome"
                style={{fontSize: 30}}
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
});
