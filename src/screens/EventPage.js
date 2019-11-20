//Home Screen/Events
import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity } from 'react-native';
import { 
  loadSettings,
  saveSettings 
} from '../storage/settingsStorage';

export default class EventPage extends Component {
  
  // handleNameChange(name){
  //   this.setState({name});
  // }
  
  // handleSubmit(){
  //   saveSettings(this.state);
  // }
    
  
  // constructor(props) {
  //   super(props);

  //   this.state = { name: '' }

  //   this.handleNameChange = this.handleNameChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // async componentDidMount() {
  //   const initialState = await loadSettings();

  //   this.setState(initialState);
  // } 
  
  render() {
    return (
      <SafeAreaView style={styles.ViewContainer}>
          <View style={styles.informationBox}>  
            <View style={styles.titleBox}>
              <Text style={styles.titleStyle}>Event Page Screen</Text>
            </View>
            <View style={styles.whereWhenBox}>
              <View style={styles.whereWhenItem}>
                <View style={styles.icon}></View>
                <Text>Where</Text>
              </View>
              <View style={styles.whereWhenItemB}>
                <View style={styles.icon}></View>
                <Text>When</Text>  
              </View>
              <View style={styles.whereWhenItem}>
                <View style={styles.icon}></View>
                <Text>Who</Text>
              </View>
            </View>
          </View>
          <SafeAreaView style={styles.scrollView}>
            
          </SafeAreaView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create(
  {
    ViewContainer:
    {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    container: {
      flex: 1,
      paddingTop: 45,
      backgroundColor: '#F5FCFF',
    },
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
    },
    informationBox: {
      flex: 1,
      backgroundColor: '#007BFF',
    },
    listBox: {
      backgroundColor: '#FFFFFF',
    },
    titleBox: {
      flex: 1,
      flexDirection: 'row', 
      backgroundColor: '#BB7BFF',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    whereWhenBox: {
      flex: 1,
      backgroundColor: '#222BFF',
    },
    whereWhenItem: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'grey',
    },
    whereWhenItemB: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'lightgrey',
    },
    scrollView: {
      flex: 1,
      backgroundColor: "#1a1a1a"
    },
    icon: {
      height: 40,
      width: 40,
      borderRadius: 20,
      backgroundColor: 'white',
      marginHorizontal: 25,
    },
  });