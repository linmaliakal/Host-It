import React, { Component } from "react";
import { Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator} from 'react-navigation-drawer';

//import screens here
import HomeScreen from './src/screens/Home.js';
import EventScreen from './src/screens/EventPage.js';
import GuestScreen from './src/screens/GuestListPage.js';
import MapScreen from './src/screens/MapPage.js';

import LandingScreen from './src/screens/Landing/Landing.js';
import SignupScreen from './src/screens/Landing/SignUp.js';
import PasswordScreen from './src/screens/Landing/Password.js';

// navigation structure: https://github.com/GantMan/drawer-example/
const DrawerStack = createDrawerNavigator({
  Home: { screen: HomeScreen },
  Event: { screen: EventScreen },
  Guest: { screen: GuestScreen },
})

const DrawerNavigation = createStackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  defaultNavigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'green'},
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitle: 'Host-It',
    headerLeft: <Button onPress={() => navigation.toggleDrawer()} title='Debug'/>
  })
})

// login stack
const LoginStack = createStackNavigator({
  landingScreen: { screen: LandingScreen },
  signupScreen: { screen: SignupScreen },
  forgottenPasswordScreen: { screen: PasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
  headerMode: 'float',
  defaultNavigationOptions: ({ navigation }) => ({
    headerStyle: {backgroundColor: 'red'},
    title: 'You are not logged in'
  })
})
  
// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'drawerStack'
})
  
const AppContainer = createAppContainer(PrimaryNav);

class Router extends Component {
    render() {
    return (
        <AppContainer />
    );
    }
}

export default Router;