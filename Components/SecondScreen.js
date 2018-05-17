import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Platform
} from 'react-native';

// import HospitalTab from './AppTabNavigator/HospitalTab'
// import BankTab from './AppTabNavigator/BankTab'
// import AddMediaTab from './AppTabNavigator/AddMediaTab'
import HotelTab from './AppTabNavigator/HotelTab'
// import SPBUTab from './AppTabNavigator/SPBUTab'
import DetailCategory from './AppTabNavigator/DetailCategory'

import { TabNavigator, StackNavigator} from 'react-navigation'
import { Icon } from 'native-base'

class SecondScreen extends Component {

	static navigationOptions = {

		header: null
	}


	render() {
		return (
			<AppTabNavigator />
		);
	}
}

export default SecondScreen;

// export const dataHapus = StackNavigator({
// 	LikesTab: { screen: LikesTab },
// 	editMhs: { screen: editMhs }
// 	}, {
// 		navigationOptions: {
// 			header: false
// 		}
//
//
// 	});

const AppTabNavigator = TabNavigator({
	// HopsitalTab: {
	// 	screen: HospitalTab
	// },
	// BankTab: {
	// 	screen: BankTab
	// },
	// AddMediaTab: {
	// 	screen: AddMediaTab
	// },
	HotelTab: {
		screen: HotelTab
	},
	// SPBUTab: {
	// 	screen: SPBUTab
	// },
	LihatDetail: {
		screen: DetailCategory
	}
}, {
		animationEnabled: true,
		swipeEnabled: true,
		tabBarPosition: "bottom",
		tabBarOptions: {
			style: {
				...Platform.select({
					android: {
						backgroundColor: 'white'
					}
				})
			},
			activeTintColor: '#2980b9',
			inactiveTintColor: '#d1cece',
			showLabel: false,
			showIcon: true
		}
	})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
