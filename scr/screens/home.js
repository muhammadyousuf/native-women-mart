import React from 'react';
import {StyleSheet,  Text, Button} from 'react-native';
import {Container, Content} from 'native-base';

class HomeScreen extends React.Component {
  render() {
    return (
      <Container >
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
