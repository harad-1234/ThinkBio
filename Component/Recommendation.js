import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, 
} from 'react-native';
  
export default class Recommendation extends Component {
render(){
    return(
<View style={styles.root}>
<Text style={styles.text}>Recommendation</Text>
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

