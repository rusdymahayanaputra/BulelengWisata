import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert,
	Image, TouchableOpacity, YellowBox, ListView,
	AppRegistry, ActivityIndicator,  FlatList } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
import { StackNavigator } from 'react-navigation';
import {DrawerNavigator} from 'react-navigation';
import { Icon } from 'native-base';

class HotelTab extends Component {
	static navigationOptions = {

		tabBarIcon: ({ tintColor }) => (
			<Icon name="ios-people" style={{ color: tintColor }} />
		)
	}
	constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false
    };
}

  componentDidMount()  {
      const url = 'http://api.ifreethink.net/Z1515051022/datas/get/3';
       this.setState({ loading: true });
      fetch (url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          data: responseJson,
          error: responseJson.error || null,
          loading: false,
          refreshing: false
        });
      }
    );
  }

	renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
};

renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
};

renderHeader = () => {
    return <SearchBar placeholder="Cari..." lightTheme round />;
};

  render() {
    let gambar = './human.png';
    console.log(gambar);
    return (
      <View style={{marginTop: 30, justifyContent:'center'}}>
			<List>
      <FlatList
        data={this.state.data}
				keyExtractor={item => item.alamat}
				ItemSeparatorComponent={this.renderSeparator}
				ListHeaderComponent={this.renderHeader}
				ListFooterComponent={this.renderFooter}
        renderItem={({ item }) => (
						<ListItem
	            roundAvatar
	            title={`${item.nama_lokasi}`}
	            subtitle={item.alamat}
							avatar={{uri :
								'http://wadaya.rey1024.com/api/img/category/'+
							(item.gambar?item.gambar:'budaya.jpg')
							}}
							onPress={()=>{
								console.log('ini item:')
								console.log(item)
								console.log(item.kat_id)
								this.props.navigation.navigate('LihatDetail',
								{
									kat: item,
									title: item.nama
								}

								)
								;
							}}

	          />
        )}
      />
</List>


      </View>
    );
  }
}


const styles = StyleSheet.create({
    Header: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#64B5F6',
    },
    TextHeader: {
        fontSize: 30
    },
    ListItem: {
        backgroundColor:'#BBDEFB',
        marginTop: 5,
        flex: 1
    },
		ImageStyle: {
			width: 250,
			height: 250,
		},
    ListFirst: {
      fontSize: 20
    }

  });


export default HotelTab;
