import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert, Image, TouchableOpacity, YellowBox, ListView  } from 'react-native';
import { StackNavigator } from 'react-navigation';

class MainScreen extends Component {
  constructor(){
    super();
  }

  navigate2SecondActivity = () => {
   this.props.navigation.navigate('Second');
  }

  render() {
    return (
      <View style = {styles.MainContainer}>

        <View style= {styles.MainTextBox}>
          <Text style={styles.MainText}> Buleleng Wisata </Text>
        </View>
				<View style={ styles.Buttonbox1}>
          <Image source = {require('./logo-buleleng.png')} style = {styles.ImageStyle} />
				</View>
        <View style = { styles.Buttonbox}>
					<TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
						<Text style={styles.SigninTextStyle}> Sign in with Facebook </Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.GoogleStyle} activeOpacity={0.5}>
						<Text style={styles.SigninTextStyle}> Sign in with Google </Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.LaterStyle} activeOpacity={0.5} onPress = { this.navigate2SecondActivity }>
            <Text style={styles.SigninTextStyle}> Later </Text>
					</TouchableOpacity>
         </View>
      </View>
    )
  }
}

const styles = StyleSheet.create(
{
  MainContainer:{

  justifyContent: 'center',
  flex:1,
  backgroundColor: '#fff',
  },

  ImageStyle: {
    width: 250,
    height: 250,
  },

  Buttonbox:{
    justifyContent: 'center',
		alignItems: 'center',
    flex:1,
    backgroundColor: '#fff',
    marginTop: 50,
		marginLeft: 50,
		marginRight: 50,
  },
	Buttonbox1:{
		justifyContent: 'center',
		alignItems: 'center',
		flex:1,
		backgroundColor: '#fff',
	},

FacebookStyle: {
  flexDirection: 'row',
  alignItems: 'center',
	justifyContent: 'center',
  backgroundColor: '#1A237E',
  borderWidth: .5,
  height: 40,
	width: 250,
  borderRadius: 5 ,
  margin: 5,
},

GoogleStyle: {
  flexDirection: 'row',
  alignItems: 'center',
	justifyContent: 'center',
  backgroundColor: '#D50000',
  borderWidth: .5,
  height: 40,
	width: 250,
  borderRadius: 5 ,
  margin: 5,
},

LaterStyle: {
  flexDirection: 'row',
  alignItems: 'center',
	justifyContent: 'center',
  backgroundColor: '#283593',
  borderColor: '#000000',
  height: 40,
	width: 250,
  borderRadius: 5 ,
  margin: 5,
},

TextStyle :{
  marginBottom : 4,
  marginRight :4,
  fontSize: 20,
  color: '#000000'
},

SigninTextStyle :{
  marginBottom : 4,
  marginRight :4,
  fontSize: 20,
  color: '#FFFFFF'
},

MainText :{
  fontSize: 28,
  color: '#000',
  alignItems: 'center',
  justifyContent: 'center'
},

MainText2 :{
  marginTop: 5,
  fontSize: 15,
  color: '#fff',
  alignItems: 'center',
  justifyContent: 'center'
},

MainTextBox:{
justifyContent: 'center',
flex:1,
backgroundColor: '#fff',
alignItems: 'center'
},


});

export default MainScreen;
