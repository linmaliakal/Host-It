//Password Screen
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight } from 'react-native';

export default class Password extends Component {
  render() {
    return (
      <View style={styles.ViewContainer}>
        <Text>Password Screen</Text>
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