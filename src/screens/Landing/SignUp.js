//Sign Up Screen
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight } from 'react-native';

export default class SignUp extends Component {
  render() {
    return (
      <View style={styles.ViewContainer}>
        <Text>Sign Up Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    ViewContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
  });