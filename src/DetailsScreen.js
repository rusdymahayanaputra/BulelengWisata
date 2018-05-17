import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button
} from "react-native";
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';


class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

export default DetailsScreen;
