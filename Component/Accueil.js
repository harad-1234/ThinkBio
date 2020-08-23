import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, 
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';


  
export default class  Accueil extends Component {
    render() {
    return(
<View style={styles.root}>

<Text style={styles.text}>Welcome to ThinkBio hello</Text>
<TouchableOpacity >
    <Image style={{width:30, height:30, marginLeft: 5}}
   source={require('../src/images/menu.png')}
    />
</TouchableOpacity>
</View>

    );
}
}


const styles = StyleSheet.create({
root:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
text:{
    fontWeight:'bold'
}
});

