//Guest List Screen
import React, { Component } from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  TouchableHighlight } from 'react-native';
//import Row from './Row';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.ViewContainer}>
        <Text>Attendees</Text>
        <SectionList
          sections={[
            {title: 'D', data: ['Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    ViewContainer:
    {
      flex: 1,
      paddingTop: 22,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247, 247, 247, 1.0)',
    },
  });