import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
 SafeAreaView
} from 'react-native';


export default function AjouterRecette ({Navigation}) {


    return (

      <SafeAreaView style={styles.container}>
      
    
     <TouchableOpacity style={styles.buttonContainer}>
     <View style={styles.socialButtonContent}>
  <Image style={styles.logo} source={{ uri:"https://img.icons8.com/material-outlined/2x/slr-camera.png" }}/>
  <Text style={styles.text}>Prendre une photo du la recette</Text>
  </View>
     </TouchableOpacity>

      <View style={styles.view} >
     <Text style={styles.text1}>Le nom du recette :</Text>
     </View>
     <View style={styles.buttonContainer}>
     <TextInput style={styles.inputs} 
      placeholder="Entrer le nom complet du recette"
      underlineColorAndroid='transparent'
     />
     </View>
     
<View style={styles.view} >
     <Text style={styles.text1}>Les caractéristiques du recette :</Text>
     </View>
         <View style={styles.buttonContainer}>
     <TextInput style={styles.inputs} 
      placeholder="Entrer les caractéristiques du recette"
      underlineColorAndroid='transparent'
     />
     </View>
     <View style={styles.view} >
     <Text style={styles.text1}>Les ingrédientes du recette :</Text>
     </View>
         <View style={styles.buttonContainer}>
     <TextInput style={styles.inputs} 
      placeholder="Entrer les ingrédientes du recette"
      underlineColorAndroid='transparent'
     />
     </View>

     <View style={styles.view} >
     <Text style={styles.text1}>Les etapes de préparation du recette :</Text>
     </View>
         <View style={styles.buttonContainer}>
     <TextInput style={styles.inputs} 
      placeholder="Entrer les etapes de préparation du recette"
      underlineColorAndroid='transparent'
     />
     </View>

     
<View style={{flexDirection:'row' }}>
     <TouchableOpacity style={[styles.button, {marginRight:20}]}>
  <Text style={styles.text}>Ajouter</Text>
     </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
  <Text style={styles.text}>Annuler</Text>
     </TouchableOpacity>
     </View>
      </SafeAreaView>

    );
 }



const styles = StyleSheet.create({
 container: {
  flex: 1,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center'
 },
logo:{
height:25,
width:25,

},
 buttonContainer: {
    //height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    //width:350,
   // borderRadius:30,
  // backgroundColor:'white',
    borderBottomWidth: 2,
 
  
  },
   socialButtonContent:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
  },
   text: {
    color: 'black',
    fontWeight:'bold',
    textAlign:'center'
  },
  view:{
    marginBottom:9,

  },
text1:{
fontWeight:'bold',
color:'black'
},
button:{
height:40,
width:90,
backgroundColor:'#A9F5A9',
 borderRadius:30,
 justifyContent: 'center',
    alignItems: 'center',
      marginBottom:20,

},

});

