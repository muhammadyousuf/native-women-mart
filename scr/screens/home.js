import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {Container, Content} from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
class HomeScreen extends React.Component {
  render() {
    return (
      <Container >
        <HeaderComponent />
        <Content>
        <Text>Home Page</Text>
        <Button
          title="go to card"
          //onPress={() => navigate('CardItem')}
          onPress={this.props.navigation.openDrawer}></Button>
          </Content>
      </Container>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});
