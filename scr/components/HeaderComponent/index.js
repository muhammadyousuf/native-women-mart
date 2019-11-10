import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native';
import {Header, Left, Body, Right, Button, Icon, Title} from 'native-base';
class HeaderComponent extends React.Component {
  render() {
    console.log('props', this.props);
    return (
      <SafeAreaView style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Women Shop</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="close" />
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
