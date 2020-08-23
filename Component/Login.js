import React, { Component} from 'react';

import {
   CheckBox,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
    
    }
  }
  static navigationOptions = {
    
    title: 'Login',
   
  };
  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }
render() {
  const { navigate } = this.props.navigation;
    return (
<View style={styles.container}>


<View  style={styles.containerInput}>
<TextInput style={styles.textIP}
 placeholder="Nom d'utilisateur"
   onChangeText={(password) => this.setState({password})}
   underlineColorAndroid='transparent'
/>
<Image style={styles.iconInput} source={{uri: 'https://img.icons8.com/dusk/2x/secured-letter.png'}}/>
</View>

<View  style={styles.containerInput}>
<TextInput style={styles.textIP}
 placeholder="Mot de passe"
   onChangeText={(email) => this.setState({email})}
   underlineColorAndroid='transparent'
/>
<Image style={styles.iconInput}  source={{uri: 'https://img.icons8.com/color/2x/show-password.png'}}/>
</View>

<TouchableOpacity style={styles.BtnMps}>
 <Text style={styles.TextMdp}>Mot de passe oublier?</Text>
 
</TouchableOpacity >

 <TouchableOpacity style={[styles.buttonContainer , styles.loginButton]} onPress={() => this.onClickListener('login')}>
 <Text style={styles.textLogin}>S'identifier</Text>
 </TouchableOpacity>

 <TouchableOpacity style={styles.Btncompte} onPress={() => navigate('Sinscrire')}>
 <Text style={styles.TextMdp}>Créer un compte</Text>
</TouchableOpacity >
<View style={styles.textOu}>
       <Text style={styles.TextMdp}>Ou</Text>
       </View>
<TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]}>
<View style={styles.viewLogin} >
<Image style={styles.icon}  source={{uri: 'https://img.icons8.com/nolan/2x/facebook.png'}}/>
<Text  style={styles.loginText}>Continuer avec facebook</Text>
</View>
</TouchableOpacity>
<TouchableOpacity style={[styles.buttonContainer, styles.googleButton]}>
<View style={styles.viewLogin} >
<Image style={styles.icon} source={{uri: 'https://cdn.icon-icons.com/icons2/615/PNG/128/Google_icon-icons.com_56578.png'}}/>
<Text  style={styles.loginText}>Continuer avec google</Text>
</View>
</TouchableOpacity>

</View>


    );
}
    
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
textIP:{
 height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
},
containerInput: {
 borderBottomColor: '#F5FCFF',
  backgroundColor: '#FFFFFF',
   borderRadius:30,
    borderBottomWidth: 1,
     width:300,
    height:45,
     marginBottom:20,
      alignItems:'center',
      flexDirection: 'row',

      shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
 shadowOpacity: 0.25,
    shadowRadius: 3.84,
 elevation: 5,
},
iconInput:{
 width:30,
    height:30,
 marginRight:15,
  justifyContent: 'center',
},
BtnMps:{
  flexDirection: 'row',
    justifyContent: 'center', 
   marginLeft:130,
    width:300,
    backgroundColor:'transparent',
    marginTop:0.01,
},
TextMdp:{
      color:"white",
    fontWeight:'bold',
    textAlign:'center',

    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
   textLogin: {
 color: 'white',

   },
 buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    marginTop:30,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
 loginButton: {
    backgroundColor: "#F08080",
 
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  icon :{
width:30,
height:30,
  },
   loginText: {
    color: 'white',
  },
  viewLogin:{
 flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
  },
   
  fabookButton: {
    backgroundColor: "#3b5998",
  },
  googleButton: {
    backgroundColor: "#ff0000",
  },
  Btncompte:{
  flexDirection: 'row',
    justifyContent: 'center', 
    width:300,
    backgroundColor:'transparent',
    marginTop:0.01,
},
textOu:{
  marginTop:20,
},
});