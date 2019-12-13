import React, { Component } from "react";
import { View } from "react-native";
import { initApi } from './src/services/api.js';

import Root from "./Root.js";

export default class App extends Component {
  componentDidMount() {
    initApi();
  }    
  
  render() {
    return (
      <View style={styles.container}>
        <Root />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};