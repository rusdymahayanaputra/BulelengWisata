import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button
} from "react-native";
import {Icon, Button, Container, Header, Content, Left} from 'native-base';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        { /* other code from before here */ }
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

export default HomeScreen;
