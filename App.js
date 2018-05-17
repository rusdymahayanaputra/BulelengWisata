import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from './Components/MainScreen';
import SecondScreen from './Components/SecondScreen';
export default class HitungVolumeBalok extends Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = StackNavigator({
  Main: {
    screen: MainScreen
  },
  Second: {
    screen: SecondScreen
  }

})

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
