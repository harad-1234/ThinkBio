import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
export default function Sinscrire ({navigation}){
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
 

  /*onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }*/

    return (
      <View style={styles.container}>
          <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Nom d'utilisateut"
               keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChange={(e)=>setEmail(e.target.value)}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/bubbles/2x/user-female.png'}}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChange={(e)=>setEmail(e.target.value)}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/dusk/2x/secured-letter.png'}}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Mot de passe"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChange={(e)=>setPassword(e.target.value)}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/2x/show-password.png'}}/>
        </View>
          
        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}  >
          <Text style={styles.loginText}>S'identifier</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer} >
            <Text style={styles.btnText}>Have an account?</Text>
        </TouchableOpacity>

      </View> 
    )}

const styles = StyleSheet.create({
      container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  },
   
   buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
loginText: {
    color: 'white',
  },
  btnText:{
    color:"white",
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },

  }); 
