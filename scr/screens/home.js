import React from 'react';
import {ScrollView} from 'react-native';
import {Container, Content} from 'native-base';
import MainSlider from '../components/MainSlider';
import FreeDelivery from '../components/FreeDelivery';
import SearchBar from '../components/SearchBar';
import TopCategories from '../components/TopCategories';
import NewArrivalBestSeller from '../components/NewArrivalBestSeller';

const HomeScreen = props => {
  return (
    <Container>
      <Content>
        <ScrollView>
          <FreeDelivery />
          <SearchBar />
          <MainSlider />
          <TopCategories />
          <NewArrivalBestSeller name="New Arrival" value={props.navigation} />
          <NewArrivalBestSeller name="Best Seller" value={props.navigation} />
        </ScrollView>
      </Content>
    </Container>
  );
};

export default HomeScreen;
