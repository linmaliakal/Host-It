//Guest List Screen
import React, { Component } from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  TouchableHighlight } from 'react-native';
import { withOrientation } from 'react-navigation';
//import Row from './Row';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Guest List'
  };

  render() {
    return (
      <View style={styles.ViewContainer}>
        <View>
          <SectionList
            sections={[
              {title: 'A', data: ['Anita', 'Ankit', 'Anna', 'Arcy', 'Avery']},
              {title: 'B', data: ['Becca', 'Bob', 'Bonnie', 'Brian']},
              {title: 'C', data: ['Carlin', 'Chloe', 'Colin']},
              {title: 'D', data: ['Dan', 'Darrell', 'Dominic']},
              {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            ]}
            renderItem={({item}) =>
            <View style={{flexDirection: "row"}}>
              <View style={styles.circle}/>
              <Text style={styles.SectionList}>{item}</Text>
            </View>
            }
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    ViewContainer: {
      flex: 1,
      paddingTop: 22,
      //fontSize: 16,
      backgroundColor: '#ffffff',
      fontSize: 30,

    },
    Title: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 4,
      borderBottomColor: 'black',
      borderBottomWidth: 3
    },
    TitleText: {
      fontSize: 30,
    },
    SectionList: {
      //flex: 1,
      paddingLeft: 10,
      paddingTop: 5,
      paddingBottom: 5,
    },
    sectionHeader: {
      paddingTop: 3,
      paddingLeft: 10,
      paddingBottom: 3,
      fontSize: 18,
      color: 'rgba(255, 255, 255, 1.0)',
      fontWeight: 'bold',
      backgroundColor: 'rgba(181, 209, 237, 1.0)',
    },
    circle: {
      alignSelf: 'center',
      justifyContent: 'center',
      height: 20,
      width: 20,
      borderRadius: 10,
      backgroundColor: 'black',
      marginLeft: 10
    },
  });