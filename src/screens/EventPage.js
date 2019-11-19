//Home Screen/Events
import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity } from 'react-native';
import { 
  loadSettings,
  saveSettings 
  } from '../storage/settingsStorage';

export default class EventPage extends Component {
  
  handleNameChange(name){
    this.setState({name});
  }
  
  handleSubmit(){
    saveSettings(this.state);
  }
    
  
  constructor(props) {
  super(props);

  this.state = { name: '' }

  this.handleNameChange = this.handleNameChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
  async componentDidMount() {
  const initialState = await loadSettings();

  this.setState(initialState);
  } 
  
  render() {
    return (
      <View>
        <Text style={styles.titleStyle}>Event Page Screen</Text>
        <ScrollView>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Event Name"
          maxLength={20}
          value={this.state.name}
          onChangeText={this.handleNameChange}
          />
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={this.handleSubmit}
          >
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
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
    container: {
      flex: 1,
      paddingTop: 45,
      backgroundColor: '#F5FCFF',
    },
   /* header: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold'
    },*/
    titleStyle: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      fontFamily: 'Avenir-MediumOblique'
    },
    inputContainer: {
      paddingTop: 15
    },
    textInput: {
      borderColor: '#CCCCCC',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      height: 50,
      fontSize: 25,
      paddingLeft: 20,
      paddingRight: 20
    },
    saveButton: {
      borderWidth: 1,
      borderColor: '#007BFF',
      backgroundColor: '#007BFF',
      padding: 15,
      margin: 5
    },
    saveButtonText: {
      color: '#FFFFFF',
      fontSize: 20,
      textAlign: 'center'
    }
  });