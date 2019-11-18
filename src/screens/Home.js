//Home Screen
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.ViewContainer}>
        <Text>HomeScreen</Text>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Event')}>
          <View style={styles.ButtonBox}>
            <View>
              <Text style={styles.CustomButton}>Go to Events</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Guest')}>
          <View style={styles.ButtonBox}>
            <View>
              <Text style={styles.CustomButton}>Go to the Guest List</Text>
            </View>
          </View>
        </TouchableHighlight>
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