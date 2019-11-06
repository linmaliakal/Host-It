//Landing Screen
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight } from 'react-native';

export default class Landing extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.ViewContainer}>
        <Text style={styles.TitleText}>Host-It</Text>
        <View style={styles.LoginContainer}>
          <TextInput 
            style={styles.LoginField}
            placeholder={'Email'}
            placeholderTextColor={'#a6cbed'} />
          <TextInput 
            style={styles.LoginField}
            placeholder={'Password'}
            placeholderTextColor={'#a6cbed'} />
          <Button title={'Log In'}/>
          <Text style={styles.LoginText}>You can also sign in with:</Text>
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
      flex: 2,
      color: '#a6cbed',
      fontFamily:'Helvetica-Bold',
      fontSize: 75,
      justifyContent: 'center',
      alignContent: 'center',
    },
    LoginContainer:
    {
      flex: 4,
      borderColor: '#a6cbed',
      borderWidth: 4,
      borderRadius: 10,
      width: '90%',
      alignItems: 'center',
    },
    LoginField:
    {
      borderBottomWidth: 2, 
      borderBottomColor: '#a6cbed',
      width: '90%',
      fontSize: 30,
      fontFamily: 'Helvetica',
      padding: 10,
    },
    LoginText: {
      color: '#a6cbed',
      fontSize: 24,
      fontFamily: 'Helvetica',
      padding: 10,
      marginVertical: 20,
    },
    SignupContainer:
    {
      flex: 1,
      backgroundColor: '#a6cbed',
      marginVertical: 20,
      justifyContent: 'center',
    },
    SignupText:
    {
      fontSize: 30,
      fontFamily: 'Helvetica',
    }
  });