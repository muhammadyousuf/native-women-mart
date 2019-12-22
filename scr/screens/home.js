import React from 'react';
import {ScrollView} from 'react-native';
import {Container, Content} from 'native-base';
import MainSlider from '../components/MainSlider';
import FreeDelivery from '../components/FreeDelivery';
import SearchBar from '../components/SearchBar';
import TopCategories from '../components/TopCategories';

class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <ScrollView>
            <FreeDelivery />
            <SearchBar />
            <MainSlider />
            <TopCategories />
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
