import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Button
} from 'react-native';


export default class Catégorie extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      data: [
  {
    id: 1,
    title: 'Soin de Visage',
    source:require('./visage.png'),
  },
  {
    id: 2,
    title: 'Soin de Corps',
    source:require('./corps.png'),
  },
  {
    id: 3,
    title: 'Soin des cheveux ',
    source:require('./cheveux.png'),
  },
  
  
]
};
}
static navigationOptions = {
  
  title: 'Liste des catégories',
 
};
render (){

  return (
    <View style={styles.container}>
    <FlatList style={styles.list}
         
    data={this.state.data}
    keyExtractor= {(item) => {
      return item.id;
    }}
    ItemSeparatorComponent={() => {
      return (
        <View style={styles.separator}/>
      )
    }}
    renderItem={(item) => {
      const { navigate } = this.props.navigation;
     // const item = post.item;
      return (
              <TouchableOpacity   onPress={() => navigate('Consulter', {
                id: item.id,
              })}>
              <View style={styles.card}>
              <Image style={styles.cardImage} source={item.source}/>
              <View style={styles.cardContent}>
                    <View>
                      <Text style={styles.title}>{item.title}</Text>
                    
                    </View>
              </View>
              </View>
              </TouchableOpacity>
              )
            }}/>
            </View>
   );
  }
}

const styles = StyleSheet.create({
 separator: {
    marginTop: 1,
  },
  container:{
    flex:1,
    marginTop:10,
  },
  list: {
    backgroundColor:"white",
  },
   /******** card **************/
  card:{
    marginTop:10,
    margin: 7,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    backgroundColor: "#DCDCDC",
  },
  cardImage:{
    flex: 1,
    height: 200,
    width: null,
  } ,
  cardContent: {
    paddingVertical: 100.5,
    paddingHorizontal: 23,
    //overlay efect
    flex: 1,
    height: 200,
    width: null,
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: 'transparent'
  }, 
  title:{
    fontSize:29,
    color: "#FFF0F5",
    marginTop: 10,
    fontWeight:'bold'
  },
});
