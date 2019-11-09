import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
class SideMenu extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    console.log(this.props.navigation);

    return (
      <View>
        <Text onPress={() => navigate('CardItem')}>HOME</Text>
      </View>
    );
  }
}

export default SideMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});
