import React from 'react';
import {StyleSheet, Text, StatusBar, SafeAreaView} from 'react-native';
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
      <SafeAreaView style={styles.container}>
        <Text onPress={() => navigate('CardItem')}>HOME</Text>
      </SafeAreaView>
    );
  }
}

export default SideMenu;

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
  },
});
