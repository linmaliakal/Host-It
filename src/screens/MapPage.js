//Home Screen
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight } from 'react-native';

export default class MapPage extends Component {
  render() {
    return (
      <View style={styles.ViewContainer}>
        <Text>Map Page Screen</Text>
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