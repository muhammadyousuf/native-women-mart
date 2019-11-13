import React from 'react';
import {Text, Button, ScrollView} from 'react-native';
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
