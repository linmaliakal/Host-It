//Landing Screen
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight } from 'react-native';
import { whileStatement } from '@babel/types';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.ViewContainer}>
        <Text style={styles.TitleText}>Host-It</Text>
        <View style={styles.LoginContainer}>
          <Text style={styles.LoginText}>Login</Text>
        </View>
        <View style={styles.SignupContainer}>
          <Text style={styles.SignupText}>Sign up</Text>
        </View>
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
      backgroundColor: '#1a1a1a',
    },
    TitleText:
    {
      color: '#a6cbed',
      fontFamily:'Helvetica-Bold',
      fontSize: 75,
      paddingBottom: 300,
    },
    LoginContainer:
    {
      backgroundColor: '#a6cbed',
      paddingVertical: 5,
      paddingHorizontal: 40,
      marginBottom: 15,
    },
    LoginText:
    {
      fontSize: 30,
      fontFamily: 'Helvetica',
    },
    SignupContainer:
    {
      backgroundColor: '#a6cbed',
      paddingHorizontal: 27,
      paddingVertical: 5,
    },
    SignupText:
    {
      fontSize: 30,
      fontFamily: 'Helvetica',
    }
  });