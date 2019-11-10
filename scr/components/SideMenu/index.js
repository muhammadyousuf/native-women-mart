import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
class SideMenu extends React.Component {
  componentWillReceiveProps(preProps) {
    if (this.props.navigation !== preProps.navigation) {
      const {state} = this.props.navigation;
      const {routes} = state.routes[0];
      let currentRoute = routes.length - 1;
      console.log(routes[currentRoute].routeName);
    }
  }
  render() {
    const {navigate} = this.props.navigation;
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
