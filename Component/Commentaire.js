import React, { Component, useState} from 'react';
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

export default class Commentaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
    profil :"https://img.icons8.com/ios/2x/circled-h.png",
        commentaire:'',
    };
   this.state = {
    data:[
        {
            id:1,
            image:"https://img.icons8.com/ios/2x/circled-h.png",
            nom:"HARAD Hana",
            date:"20 septembre 2019",
            commentaire:"J'ai téléchargé l'application il y a à peine quelques heures et j'en suis déjà très satisfaite !",
        },
        {
            id:2,
            image:"https://img.icons8.com/ios-filled/2x/circled-h.png",
            nom:"HARAD Hana",
            date:"20 septembre 2019",
            commentaire:"J'ai téléchargé l'application il y a à peine quelques heures et j'en suis déjà très satisfaite !",
        },
        {
            id:3,
            image:"https://img.icons8.com/ios/2x/circled-h.png",
            nom:"HARAD Hana",
            date:"20 septembre 2019",
            commentaire:"J'ai téléchargé l'application il y a à peine quelques heures et j'en suis déjà très satisfaite !",
        },
        {
            id:4,
            image:"https://img.icons8.com/ios-filled/2x/circled-h.png",
            nom:"HARAD Hana",
            date:"20 septembre 2019",
            commentaire:"J'ai téléchargé l'application il y a à peine quelques heures et j'en suis déjà très satisfaite !",
        },
        {
            id:5,
            image:"https://img.icons8.com/ios/2x/circled-h.png",
            nom:"HARAD Hana",
            date:"20 septembre 2019",
            commentaire:"J'ai téléchargé l'application il y a à peine quelques heures et j'en suis déjà très satisfaite !",
        },
        {
            id:6,
            image:"https://img.icons8.com/ios-filled/2x/circled-h.png",
            nom:"HARAD Hana",
            date:"20 septembre 2019",
            commentaire:"J'ai téléchargé l'application il y a à peine quelques heures et j'en suis déjà très satisfaite !",
        },
        {
            id:7,
            image:"https://img.icons8.com/ios/2x/circled-h.png",
            nom:"HARAD Hana",
            date:"20 septembre 2019",
            commentaire:"J'ai téléchargé l'application il y a à peine quelques heures et j'en suis déjà très satisfaite !",
        },
    ]
   };
    }

  render() {
    return (
      <View style={styles.root}>
     <View style={styles.input}>
         <Image  style={styles.logo} source={this.state.profil} /> 
     <TextInput  style={styles.textInput}
     placeholder="Ajouter une commentaire"
     underlineColorAndroid='transparent'
     onChangeText={(commentaire) => this.setState({commentaire})}/>
     </View>
     <View style={styles.flatliste}>
    <FlatList
    data={this.state.data}
    extraData={this.state}
    ItemSeparatorComponent={() => {
      return (
        <View style={styles.separator}/>
      )
    }}
    keyExtractor={(item)=>{
      return item.id;
    }}
    renderItem={(post) => {
        const Comment = post.item;
          return(
   <View style={{marginBottom:15}}>
        <View style={styles.view1}>
          <Image  style={styles.logo1}   source={{uri: Comment.image}}   />
          <View style={styles.view2}>
          <View style={{marginTop:5}}>
          <Text style={{fontWeight:'bold'}}> {Comment.nom}</Text>
          </View>
          <View style={{marginTop:2}}>
         <Text style={{color:"#A4A4A4"}}> {Comment.date}</Text>
         </View>
         <View style={{marginTop:5}}>
          <Text style={{color:"black" , width:350}}>{Comment.commentaire}</Text>
          </View>
          </View>
          </View>
          <View style={styles.view3}>
          <TouchableOpacity>
           <Image style={styles.jaime}  source={{uri: 'https://img.icons8.com/dotty/2x/facebook-like.png'}}/>
           </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:20}}><Text style={{color:"#F78181"}}> Répondre</Text></TouchableOpacity>     
            </View> 
            </View>  
          );     
   }}/>
   </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
height:40,
width:40,
marginTop:10,
marginLeft: 10,
    marginRight: 5,
  },
  input:{
    flexDirection:'row',
    marginTop:20,
  },
  logo1:{
    height:50,
    width:50,
  
  },

textInput:{
  marginLeft:0,
  borderBottomWidth: 2,
  marginBottom: 10,
  marginRight:190,
},
separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  flatliste:{
marginTop:20,
  },

  jaime:{
    height:20,
    width:20,
  },
  view1:{
      flexDirection:'row',
     marginTop:10,
  },
  view2:{
    flexDirection:"column",
    justifyContent:"space-between",
   
},
view3:{
    marginTop:15,
    marginLeft:55,
    flexDirection:'row',
  
}
});
