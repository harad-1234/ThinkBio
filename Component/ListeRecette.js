import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  TextInput 
} from 'react-native';
export default class ListeRecette extends Component{
 
  constructor(props) {
    super(props);
    this.state = {
      data: [
          {id:1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSItdgBFze-9FmRDmPbO8bkIlryxSjxgyZlzg&usqp=CAU", name:"Masque au miel pour  peaux sèches",    },
          {id:2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwsK-HUYsAtvjW3gSolO-l3Wy2Df94JQIWtw&usqp=CAU", name:"Un masque à l'aloe vera pour hydrater la peau du visage ",    },
          {id:3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOrCzrfJCvo0BRxkduwsGXECuT4IEmi_QMkg&usqp=CAU", name:"Le masque au miel pur pour tous les types de peau ", },
          {id:4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8qe1fb761xRgBAMGxAmVtn_7aih_8WFJRmg&usqp=CAU", name:"Créme de jour pour peaux grasses",  },
           {id:5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQapipc90cMnDnY8h2sFYCkfwIRhaN9HFEgsw&usqp=CAU", name:"Le masque visage miel - cannelle pour les peaux à problèmes",  },
            {id:6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbNJpLRQMQsJzFu-EeCSSfuO-PwvpDhH873A&usqp=CAU", name:"Créme de nuit pour peaux sèches",  },
             {id:7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXYObPAeQ8vqf0eVXprj_0hLVc7xfELgNUyw&usqp=CAU", name:"Masque visage bonne mine à l'orange et au miel",  },
            ]
          };
        }
        static navigationOptions = {
  
          title: 'Liste des recettes',
         
        };
        render() {
        return (
            <ScrollView>
    <View style={styles.root}>
    <Text style={styles.text}>Liste des recettes</Text>
     <View style={styles.formContent}>
              <View style={styles.inputContainer}>
             
                <TextInput style={styles.inputs}
                   
                    placeholder="Nom ou description"
                    underlineColorAndroid='transparent'
                  />
                  <Image style={[styles.iconInput, ]} source={{uri: 'https://img.icons8.com/dusk/2x/search.png'}}/>
              </View>
            </View>
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
          renderItem={(item) => {
            const { navigate } = this.props.navigation;
           // const item = post.item;
            return (
                    <TouchableOpacity   onPress={() => navigate('Recette', {
                      id: item.id,
                    })}>
                <View style={styles.container}>
                  
                    <Image style={styles.image} source={{uri: item.image}}/>
                
                  <View style={styles.content}>
                    <View style={styles.contentHeader}>
                      <Text  style={styles.name}>{item.name}</Text>
                     
                    </View>
                    
                  </View>
                 
                </View>
                 </TouchableOpacity>
              
              )
            }}/>
            </View>
              </ScrollView>
        );
      }
}
    const styles = StyleSheet.create({
        root: {
          backgroundColor: "#ffffff",
         // marginTop:10,
           marginBottom:10,
        },
        container:{
          paddingLeft: 5,
          paddingRight: 16,
          paddingVertical: 12,
          flexDirection: 'row',
          alignItems: 'flex-start',
          
      
        },
        content: {
          marginLeft: 16,
        flex: 1,
        },
        contentHeader: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 6,                   
        },
        separator: {
          height: 1,
          backgroundColor: "#CCCCCC"
        },
        image:{
          width:100,
          height:108,
          borderRadius:20,
          marginLeft:20
        },
      
        name:{
          width:235,
          fontSize:20,
          fontWeight:"bold",
          color:"black",
        },
       
          inputContainer: {
            borderBottomColor: '#F5FCFF',
            backgroundColor: '#FFFFFF',
            borderRadius:30,
            borderBottomWidth: 1,
            height:45,
            flexDirection: 'row',
            alignItems:'center',
            flex:1,
            margin:10,
            paddingLeft:12,
             shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.1,
          elevation: 10,
          },
        
        formContent:{
       marginVertical: 20 ,
          flexDirection: 'row',
          marginTop:50,
        },
        iconInput:{
       width:30,
          height:30,
       marginRight:15,
        justifyContent: 'center',
         
      },
      inputs:{
         height:45,
          marginLeft:16,
          borderBottomColor: '#FFFFFF',
          flex:1,
      },
      text:{
        color: '#C25D5D',
          alignSelf: 'center',
          fontSize: 20,
          marginTop:50,
          
      },
      });  