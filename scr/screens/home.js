import React from 'react';
import {ScrollView} from 'react-native';
import {Container, Content} from 'native-base';
import MainSlider from '../components/MainSlider';
import FreeDelivery from '../components/FreeDelivery';

class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <ScrollView>
            <FreeDelivery />
            <MainSlider />
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
