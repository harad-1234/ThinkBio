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


export default class Composant extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        
{id:1, Image:"https://img.icons8.com/emoji/2x/green-circle-emoji.png", comment:"EAU"},
{id:2, Image:"https://img.icons8.com/emoji/2x/orange-circle-emoji.png", comment:"PARAFFINUN"},
{id:3, Image:"https://img.icons8.com/emoji/2x/red-circle-emoji.png", comment:"OCTOCRYLENE"},
{id:4, Image:"https://img.icons8.com/emoji/2x/brown-circle-emoji.png", comment:"MICROPLASTIQUE"},

]
};
}



render () {
    return (
< ScrollView style={styles.root}>
<View style={styles.container}>
<View style={ styles.btn}>
<Text style={ styles.text1}>Satisfaisant</Text>
<Text style={[styles.btnScore,styles.text , {backgroundColor:"#F7FE2E"}]}>1</Text>
</View>
<View style={styles.separator}></View>
<View style={ styles.btn}>
<Text style={ styles.text1}>Bien</Text>
<Text style={[styles.btnScore,styles.text , {backgroundColor:"#04B404"}]}>1</Text>
</View>

<View style={styles.separator}></View>


<View style={ styles.btn}>
<Text style={ styles.text1}>Pas terrible</Text>
<Text style={[styles.btnScore,styles.text , {backgroundColor:"#B45F04"}]}>1</Text>
</View>
<View style={styles.separator}></View>

<View style={ styles.btn}>
<Text  style={ styles.text1}>Controversé /A risque</Text>
<Text style={[styles.btnScore,styles.text , {backgroundColor:"#FF0000"}]}>1</Text>
</View>
<View style={ styles.btnListe}>
<Text style={{color:"#848484", paddingLeft:5}}>Liste compléte des composants:</Text>
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
renderItem={(post) => {
  const item = post.item;
  return (
        
            <View style={styles.box}>
                <Image style={styles.logo} source={{uri: item.Image}}/>
                <Text style={styles.comment}>{item.comment}</Text>
              </View>         
 
 )
}}/>
</View>
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
   btnScore: {
    height:20,
    width:20,
    borderRadius:8,
    borderColor:'#F2F2F2',
    borderWidth:1,
  },
    container:{ 
    justifyContent:'center', 
    marginHorizontal:20, 
    flexDirection:'column', 
    marginTop:20
  },
  btn:{
    justifyContent:'space-between', 
    flexDirection:'row', 
     alignItems: 'center',
     height:30,
  },
  text:{
color:'#FFFFFF',
fontSize:13,
justifyContent:'center'
  },
text1:{
fontWeight:'500',
fontSize:13,
},
btnListe:{
height:30,
    width:300,
    borderColor:'#FAFAFA',
    borderWidth:1,
 alignItems: 'stretch',
 marginTop:10,
backgroundColor: '#F2F2F2'
},
logo:{
    
  height:20,
  width:20,
},
comment:{
   fontSize:13,
   fontWeight:'500',
    marginLeft:20,
  
},
box: {
    padding:15,
    marginBottom:2,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
}
});