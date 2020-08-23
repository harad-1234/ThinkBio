import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView
} from 'react-native';
 

 export default class Consulter extends Component{
  static navigationOptions = {
  
    title: 'Produit ou Recette',
   
  };
   render(){
    const { navigate } = this.props.navigation;

     return(
     
       
       <View style={styles.container}>
        <TouchableOpacity  onPress={() => navigate('Listeproduit')}  style={styles.buttonContainer} >
      <View  style={styles.view}>
      
       <Text  style={styles.text} >Produits</Text>
       <Image  style={styles.logo2} source={{ uri:"https://img.icons8.com/ios/2x/cream-tube.png" }}/>
      </View>    
       </TouchableOpacity > 



        <TouchableOpacity  onPress={() => navigate('ListeRecette')} style={styles.buttonContainer}  >
      <View style={styles.view}>
      
       <Text  style={styles.text} >Recettes</Text>
       <Image  style={styles.logo2} source={{ uri:"https://img.icons8.com/plasticine/2x/leaf.png" }}/>
      </View>    
       </TouchableOpacity >   




       </View>
       

     );
   }
  }

 
 const styles= StyleSheet.create({
 container: {
flex:1,
justifyContent:'center',
alignItems:'center',
marginTop:70,
 },
 logo:{
  width:35,
    height:35,
marginLeft:20,
  
 },
 
 text:{
   //   marginLeft:16,
      flex:1,
      color:'black',
fontSize:25,
fontWeight:'bold',
textAlign:'center',
fontStyle:"italic"


 },

 
 buttonContainer: {
    height:55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:30,
    width:300,
    borderRadius:30,
    backgroundColor:"#ECDDDD",
   shadowColor: "#424242",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    
  },
 
  view:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  logo2:{
height:30,
width:30,
marginRight:20,
  },
 });