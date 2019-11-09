import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Page</Text>
        <Button
          title="go to card"
          //onPress={() => navigate('CardItem')}
          onPress={this.props.navigation.openDrawer}></Button>
      </View>
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
