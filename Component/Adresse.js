import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
  SafeAreaView,
} from 'react-native';


   export default class Adresse extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [
          {id:1, nom:"Piege", adresse:"20 rue didouche mourade", num:"0555251452", prix:"2500 DA"}, 
     {id:2, nom:"Cosmétique Bio", adresse:"20 rue didouche mourade", num:"0555251452", prix:"2500 DA"},
     {id:3, nom:"Cosmétique Bio", adresse:"20 rue didouche mourade", num:"0555251452", prix:"2500 DA"},  
        ]
      };
    }
  

    render() {
    return (
     < ScrollView style={styles.root}>
<FlatList 
 data={this.state.data}
 keyExtractor= {(item) => {
  return item.id;
}}
ItemSeparatorComponent={() => {
  return (
    <View style={styles.separator}/>
  )
}}
renderItem={(post) => {
  const item = post.item;
  return (
            <View style={styles.box}>
            <View style={{flexDirection:"column"}}>
                <Text style={styles.name}>{item.nom}</Text>
                  <Text style={{color:"#000000",fontWeight:'500',}}>{item.adresse}</Text>
                  <Text style={{color:"#848484",fontWeight:'500',}}>{item.num}</Text>
                   </View> 
                  <Text style={{color:"#FE2E2E",fontWeight:'500',}}>{item.prix}</Text>

              </View>         
 
 )
}}/>
       </ScrollView>
      );
  }
   }


const styles = StyleSheet.create({
root:{
  flex:1,
   marginTop:30,
},
separator: {
    height: 2,
    backgroundColor: "#F2F2F2"
  },
  box:{
     justifyContent:'space-between',
     flexDirection:"row"
  },
  name:{
fontWeight:'900',
fontSize:14,
fontStyle:"italic",
color:"#31B404"

  },
  });