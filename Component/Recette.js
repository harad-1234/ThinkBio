import React, { Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';


export default class Recette  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwsK-HUYsAtvjW3gSolO-l3Wy2Df94JQIWtw&usqp=CAU',
          name: "Un masque à l'aloe vera pour hydrater la peau du visage .",
          description:
            "L’aloe vera est réputé pour ses bienfaits en usage interne mais aussi externe. Le gel d’aloe vera a d’excellents effets hydratants et anti-inflammatoires. Il aide ainsi à soigner l'acné, l'eczéma et à réduire les rides.",
          ingrédients: [
            '- 1 cuillère à soupe de gel d’aloe vera.',
            '- 1 cuillère à soupe d’huile de noix de coco.',
            '- 1 cuillère à soupe de cassonade (facultative).',
            '- 1 cuillère à café de miel.',
          ],
          etaps: [
            '- Commencez par laver complètement votre visage avec de l’eau chaude pour se débarrasser de toute la saleté et la crasse de la journée.',
            '- Ensuite, selon le type d’aloès que vous voulez utiliser, gel ou jus , vous prenez simplement cette solution et frottez doucement sur votre visage dans les cercles minuscules jusqu’à avoir l’intégralité de votre visage couvert, comme un masque.',
            ' - Le processus prend généralement environ 20 minutes au total pour « sécher ».',
            ' - Une fois que le masque est sec, épluchez-les avec les mains propres puis lavez votre visage à l’eau tiède.',
            ' - Une fois que vous rincez le visage, assurez-vous de le sécher avec une serviette, en utilisant la méthode de tapotement.',
          ],
        },
      ]
    };
  }
  static navigationOptions = {
   
    title: 'Recette',
   
  };
    render(){
      const { navigate } = this.props.navigation;
    return (
      <View style={styles.root}>
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
              <View style={styles.root}>
                <View style={styles.root1}>
                  <Image style={styles.image} source={{ uri: item.image }} />
                </View>
              
                  <View style={styles.root2}>
                    <Text style={styles.name}>{item.name}</Text>
                  </View>
                  <View style={styles.root3}>
                  <Text style={styles.description}>{item.description}</Text>
                  </View>
                  <Text style={styles.titre}>Les ingérdients :</Text>
                    <View style={styles.root4}>
                  <Text style={styles.name1}>{item.ingrédients}</Text>
                    </View>
                     <Text style={styles.titre}>Les etapes :</Text>
                    <View style={styles.root5}>
                  <Text style={styles.name1}>{item.etaps}</Text>
                  </View>
                  <View>
                    <TouchableOpacity style={styles.buttonContainer}   onPress={() => navigate('Commentaire')}>
                      <Text style={styles.titre1}>Commentaire</Text>
                    </TouchableOpacity>
                  </View>
                </View>
         
         )}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 20,
    alignContent:'center',
    justifyContent:'center',
    flexDirection:'column',
    marginLeft:10,
    marginRight:10,
  },

  image: {
    height: 200,
    width: 400,
  },
  name: {
    textAlign: "center",
    color:'black',
    fontStyle:'italic'

  },
  root1: {
    marginBottom: 20,
  },
  root2: {
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#ff9baa",
    borderRadius: 6,
    backgroundColor:"#f9e6f0",
  },
  root3:{
marginBottom:20,
 borderWidth: 3,
    borderColor: "#ff9baa",
    borderRadius: 6,
  },
description:{
    color:'black',
    fontStyle:'italic',
paddingLeft:10,
paddingRight:10,
},
  root4:{
marginBottom:20,

borderWidth: 3,
borderColor: "#ff9baa",
borderRadius: 6,
  },
root5:{
marginBottom:20,
borderWidth: 3,
borderColor: "#ff9baa",
borderRadius: 6,

},
titre:{
marginBottom: 10,
color:'#ff9baa',
fontSize:20,
fontStyle:'italic'
},
name1:{
  paddingLeft:10,
paddingRight:10,
 marginHorizontal:1,

},
buttonContainer: {
  height:45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  //marginBottom:20,
  marginTop:20,
  width:300,
  borderRadius:30,
  backgroundColor:'#ff9baa',
  marginLeft:30,
},
titre1:{
  fontWeight:'bold',
  fontSize:16,
}
});
