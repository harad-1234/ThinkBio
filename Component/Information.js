import React, { Component } from 'react';
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
  SafeAreaView
} from 'react-native';

export default class Information extends Component{

  static navigationOptions = {
 
    title: 'Information',
   
  };
  
    render(){
      const { navigate } = this.props.navigation;
    return (

      <SafeAreaView style={styles.container} >
  <View style={styles.container1}>
      <Image style={styles.image} source={{uri:"https://cdn.idealforme.dz/680-large_default/dilo-shampoing-a-l-ortie-pour-cheveux-gras-250-ml.jpg"}}/>
      <View style={styles.content}>
      <View style={styles.contentHeader}>
      <Text style={styles.name}>DILO</Text>
  </View>
  <View>
        <Text style={styles.comment}>Shampoing À L'ortie Pour Cheveux Gras 250 Ml </Text>
  </View>
  <View>
  <Text style={styles.price}>1400 DA Négociable</Text>
  </View>
</View>
</View>
<View  style={styles.button}>

  <TouchableOpacity  style={styles.composant} onPress={() => navigate('Composant')}>
  <Image style={styles.icon}  source={{uri:"https://thumbs.dreamstime.com/z/flacon-avec-la-ligne-mince-ic%C3%B4ne-de-vecteur-liquide-chimique-cosm%C3%A9tique-organique-pictogramme-lin%C3%A9aire-composant-naturel-154013590.jpg"}}/>
  <Text style={styles.text}> Composants</Text>
   </TouchableOpacity>


    <TouchableOpacity onPress={() => navigate('Altérnatives')}
     style={styles.composant}>
  <Image style={styles.icon}  source={{uri:"https://png.pngtree.com/png-vector/20191016/ourlarge/pngtree-cream-container-and-leaf-vector-thin-line-icon-png-image_1803326.jpg"}}/>
  <Text style={styles.text}>Alternatives</Text>
   </TouchableOpacity>

    <TouchableOpacity style={styles.composant} onPress={() => navigate('Commentaire')} >
  <Image style={styles.icon}  source={{uri:"https://image.freepik.com/vecteurs-libre/icone-commentaire_9385-3.jpg"}}/>
  <Text style={styles.text}>Commentaire</Text>
   </TouchableOpacity>
    <TouchableOpacity style={styles.composant} onPress={() => navigate('Adresse')} >
  <Image style={styles.icon}  source={{uri:"https://www.flaticon.com/premium-icon/icons/svg/3007/3007156.svg"}}/>
  <Text style={styles.text}>ou acheté ?</Text>
   </TouchableOpacity>
  </View>

  <View style={styles.separator}></View>

</SafeAreaView>
    );
  }

}






const styles = StyleSheet.create({
 container:{
   flex:1,
   marginTop:90,

  },
  image:{
    width:120,
    height:110,
  },
   container1:{
    paddingLeft: 5,
    paddingRight:50,
    paddingVertical: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',

   },
   name:{
    width:235,
    fontSize:16,
    fontWeight:"bold",
    color:"#9cb0c3",
  },
  comment:{
    width:235,
  },
  price:{
     fontSize:16,
    fontWeight:"bold",
    color:"green",
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
   content: {
    marginLeft: 13,
  flex: 1,
  },
   separator:{
    height:4,
    width: 700,
    backgroundColor:"#bdc3c7",
     marginTop:1,
    marginHorizontal:1
   },
   icon:{
     height:15,
    width:15,

   },
   button:{
     flexDirection:'row',
    marginTop:20,
    justifyContent:'center',
    marginLeft:8,
  },
  composant:{
    width:90,
    height:30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom:10,
    borderRadius:10,

    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:4,

  },
  text:{
fontSize: 10,
paddingLeft:1,
  }
});
