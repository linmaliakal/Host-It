//Home Screen
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import { getCards } from '../services/api.js'

const DATA = [
  {
    category: 'October 2019',
    data: [
      {id: 0, title: 'Family Reunion'},
      {id: 1, title: 'Text'},
    ],
  },
  {
    category: 'November 2019',
    data: [
      {id: 0, title: 'Retirement Party'},
      {id: 1, title: 'Team Potluck'},
      {id: 2, title: 'Thanksgiving'}
    ],
  },
];

function Item({ title }) {
  return (
    <TouchableHighlight onPress={() => { this.props.navigation.navigate('Event', {key: 'xyz'}) }}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>Wednesday, Oct 28</Text>
      </View>
    </TouchableHighlight>
  );
}

export default class Home extends Component {

  state = { events: [] }

  componentDidMount() {
    this.unsubscribeGetCards = getCards((snapshot) => {
      console.log(snapshot);
      this.setState({
        events: Object.values(snapshot.val())
      })
    })
    console.log("state: " + JSON.stringify(this.state.events));
  }

  componentWillUnmount() {
    this.unsubscribeGetCards();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={this.state.events}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item.title} />}
          renderSectionHeader={({ section: { category } }) => (
            <Text style={styles.header}>{category}</Text>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  header: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontSize: 24,
  },
  date: {
    fontSize: 20,
  },
});