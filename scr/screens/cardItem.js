import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const CardItemScreen = props => {
  const {goBack} = props.navigation;
  return (
    <View style={styles.container}>
      <Text>Card Item Page</Text>
      <Button title="go to home" onPress={() => goBack()} />
    </View>
  );
};

export default CardItemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});
