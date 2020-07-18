import React from 'react';
import {ScrollView} from 'react-native';
import {Container, Content} from 'native-base';
import MainSlider from '../components/MainSlider';
import FreeDelivery from '../components/FreeDelivery';
import SearchBar from '../components/SearchBar';
import TopCategories from '../components/TopCategories';
import NewArrival from '../components/NewArrival';
import FooterComponent from '../components/FooterComponent';

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
            <NewArrival />
          </ScrollView>
        </Content>
        <FooterComponent />
      </Container>
    );
  }
}

export default HomeScreen;
