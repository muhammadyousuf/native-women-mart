import React from 'react';
import {StyleSheet, Text, Button, ScrollView} from 'react-native';
import {Container, Content} from 'native-base';
import MainSlider from '../components/MainSlider';

class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <ScrollView>
            <MainSlider />
            <Text>Home Page</Text>
            <Button
              title="go to card"
              //onPress={() => navigate('CardItem')}
              onPress={this.props.navigation.openDrawer}
            />
          </ScrollView>
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
