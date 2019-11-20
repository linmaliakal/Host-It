//Home Screen
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
} from 'react-native';

const DATA = [
  {
    title: 'Monday, Nov 25',
    data: ['Family Reunion'],
  },
  {
    title: 'Tuesday, Nov 26',
    data: ['Retirement Party', 'Team Potluck'],
  },
  {
    title: 'Wednesday, Nov 27',
    data: [],
  },
  {
    title: 'Thursday, Nov 28 ',
    data: ['Thanksgiving'],
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class Home extends Component {
  render() {
    return (
<<<<<<< HEAD
      <View style={styles.ViewContainer}>
        <Text>Host-It</Text>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Event')}>
              <View style={styles.ButtonBox}>
                <View>
                  <Text style={styles.CustomButton}>Go to Events</Text>
                </View>
              </View>
            </TouchableHighlight>
      </View>
=======
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
>>>>>>> 1ab4ca12193c451513e859c57d729e8ef57841eb
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
    backgroundColor: '#1a1a1a',
  },
  item: {
    backgroundColor: 'white',
    padding: 30,
    marginVertical: 8,
    marginHorizontal: 20,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontSize: 24,
  },
});