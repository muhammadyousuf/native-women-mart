import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';

const UserScreen = props => {
  const {goBack} = props.navigation;

  return (
    <View style={styles.container}>
      <Button title="go to home" onPress={() => goBack()} />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
