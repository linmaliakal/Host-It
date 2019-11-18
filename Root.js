import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//import screens here
import HomeScreen from './src/screens/Home.js';
import EventScreen from './src/screens/EventPage.js';
import GuestScreen from './src/screens/GuestList.js';
import MapScreen from './src/screens/MapPage.js';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Event: EventScreen,
        Guest: GuestScreen,
        Map: MapScreen,
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