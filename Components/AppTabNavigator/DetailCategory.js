import React from 'react';
import { StyleSheet, Text, ScrollView, TouchableHighlight, TouchableOpacity, View, Button,
  TextInput,FlatList,Image } from 'react-native';
import { List, ListItem, Card,Rating, ButtonGroup, Icon} from "react-native-elements";

export default class ItemWadaya extends React.Component {
  // static navigationOptions = ({ navigation })=> ({
  //   title: navigation.state.params.title,
  // });
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      selectedIndex: 2
    };
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  _componentDidMount()  {
      const { params } = this.props.navigation.state;
      const kat_id= params.kat.kat_id;
      const url = 'http://wadaya.rey1024.com/api/getListBudaya.php?kat_id='+kat_id;
       this.setState({ loading: true });
      fetch (url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('budaya');
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


  render() {
    const btnDeskripsi = () => <Icon
                              name='description'
                              color='#3E2723' />
    const btnKomentar = () => <Icon
                              name='comment'
                              color='#3E2723' />
    const btnMedia = () => <Icon
                              name='collections'
                              color='#3E2723' />
    const btnLokasi = () => <Icon
                              name='add-location'
                              color='#3E2723' />
    const btnLaporkan = () => <Icon
                              name='report'
                              color='#3E2723' />

    const buttons = [
      { element: btnDeskripsi },
      { element: btnKomentar },
      { element: btnMedia },
      { element: btnLokasi },
      { element: btnLaporkan },
    ]
    const { selectedIndex } = this.state
    const { params } = this.props.navigation.state;
    //console.log('judul' +params.kat.nama);
    return (
      <View style={styles.contBudaya}>
         <View style={styles.image}>
         <Image
           style={styles.image}
           resizeMode="cover"
           source={require('./sentral.jpg')} style = {styles.ImageStyle}

         />
         </View>
         <View style={styles.contJudul} >
            <Text style={styles.textJudul1}> Hotel Sentral </Text>
            <Text style={styles.textJudul2}>
              Jalan Ahmad Yani No. 48, Kaliuntu, Singaraja, Kaliuntu, Kec. Buleleng, Kabupaten Buleleng, Bali 81114
            </Text>
         </View>
         <View style={styles.listButton}>
            <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
              buttons={buttons}
              containerStyle={{flex: 1}} />
         </View>
         <View style={styles.contDeskripsi}>
            <ScrollView>
              <Text style={styles.teksDeskripsi}>
              Hotel Sentral terletak di Singaraja, hanya 10 menit berkendara dari Pantai Lovina. Hotel ini menawarkan meja depan 24 jam dan Wi-Fi gratis di seluruh area gedungnya. Hotel juga menyediakan tempat parkir gratis.

              Sentral Hotel berjarak 10 menit berkendara dari Kawasan Perbelanjaan di Lovina. Bandara Ngurah Rai dapat dicapai dalam 2,5 jam berkendara.

              Kamar-kamar hotel ini menawarkan AC atau kipas angin. TV, meja, dan area tempat duduk juga tersedia. Kamar juga memiliki kamar mandi pribadi.

              Anda dapat menyewa sepeda atau mobil untuk menjelajahi daerah sekitarnya. Layanan antar-jemput bandara tersedia dengan biaya tambahan. Layanan binatu juga ditawarkan untuk kenyamanan Anda.

              Sentral Restaurant menyajikan aneka hidangan Indonesia.

              Kami berbicara bahasa Anda!
              </Text>
            </ScrollView>
         </View>

      </View>

    );
  }
}
const styles = StyleSheet.create({
    footer: {
      flex: 1,
      backgroundColor: '#D7CCC8',
      justifyContent: 'center',
      alignItems: 'center'
    },

    image: {
      flex: 3,
      height: 120

    },
    contBudaya: {
        flex: 1,
        justifyContent: 'center',
        margin: 10

    },
    ImageStyle: {
      width: 520,
      height: 250,
    },
    teksDeskripsi: {
        fontSize: 15,
        textAlign: 'justify',
        padding: 5

    },
    textJudul1: {
      fontSize: 20,
      color: '#fff',
      paddingLeft: 5

    },
    textJudul2: {
      fontSize: 16,
      color: '#fff',
      paddingLeft: 5

    },
    listButton: {
      flex: 1,
      backgroundColor: '#D7CCC8'
    },
    contJudul: {
      flex: 2,
      justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#8D6E63'

    },
    contDeskripsi: {
      flex: 4,
      backgroundColor: '#EFEBE9'
    }

  });
