import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//import screens here
import HomeScreen from './src/screens/Home.js';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        // Other: OtherScreen
    },
    {
        initialRouteName: "Home"
    }
);

const AppContainer = createAppContainer(RootStack);

class Router extends Component {
    render() {
    return (
        <AppContainer />
    );
    }
}

export default Router;