import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, Alert, ScrollView, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './home.js';
import Inscription from './inscription.js';
import Connexion from './connexion.js';
import CameraExample from './camera.js';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Inscription: Inscription,
    Connexion: Connexion,
    Camera: {screen:CameraExample},
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
