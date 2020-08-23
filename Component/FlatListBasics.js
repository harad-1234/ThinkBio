import React, { Component } from 'react';
import { AppRegistry ,SectionList ,Alert,Platform ,  FlatList,ToastAndroid,TouchableOpacity, StyleSheet, Text, View,Image,ActivityIndicator } from 'react-native';
//import Swipeout from 'react-native-Swipeout';

//import  { getproduitfromserver } from 'networking/server';

export default class FlatListBasics extends Component {

constructor() {
    super();
    this.state = {
         dataSource:[] ,
         isLoading:true
    }
  }
  renderItem =  ({ item } ) => {
    
   return( 
      <TouchableOpacity style={ { flex:1, flexDirection:'row', marginBottom:3 } } 
      onpress={ ()=>ToastAndroid.show(item.name,ToastAndroid.SHORT)}   >
        <Image style= { { width:80 , height:80, margin:5 } } 
        source={ {url:item.photo } } />
         <View style={ { flex:1, justifyContent:'center', marginLeft:5 } } >
          <Text style={ { fontSize:15, color:'green', marginBottom:15 } } >
          { item.name }
          </Text>
            <Text style={ { fontSize:15, color:'green', marginBottom:15 } } >
          { item.description }
          </Text>
            <Text style={ { fontSize:15, color:'green', marginBottom:15 } } >
          { item.prix }
          </Text>
            <Text style={ { fontSize:15, color:'green' } } >
          { item.lieu }
          </Text>
          </View>
        </TouchableOpacity>
   )

            } 

  renderSeparator = () => {
 
     return (
        <View
 style={ { height:1, width:'100%' , backgroundColor:'black'} } >
 </View>
     )

     }

componentDidMount() { 
  const url= 'http://127.0.0.1:8000/api/produit'

  fetch(url)
   .then((response)=> response.json())
   .then((responseJson)=> { 
     this.setState({ 
       dataSource: responseJson.data,
       isLoading:false
     }) 

   })
   .catch((error)=>
   { 
     console.log(error)
           
    })

 }
 render()  {
   return (
     this.state.isLoading
     ?
      <View style={ { flex:1, justifyContent:'center', alignItems:'center' } } >
      <ActivityIndicator size="Large" color="#330066" animating />
      </View>
      :
     <View style={styles.container}>
     <FlatList
      data={this.state.dataSource}
      renderItem={this.renderItem}
      keyExtractor={(item,index)=> index}
      ItemSeparatorComponent={this.renderSeparator}

     />
     </View>
   );
  }
   }









/*
<Text style={styles.text}>Liste des produits</Text>
 <View style={styles.formContent}>
          <View style={styles.inputContainer}>
         
            <TextInput style={styles.inputs}
               
                placeholder="Marque ou description"
                underlineColorAndroid='transparent'
              />
              <Image style={[styles.iconInput, ]} source={{uri: 'https://img.icons8.com/dusk/2x/search.png'}}/>
          </View>
        </View>
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
          const Produit = post.item;
          return(
             <TouchableOpacity onPress={() => {}}>
            <View style={styles.container}>
              
                <Image style={styles.image} source={{uri: Produit.image}}/>
            
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                  <Text  style={styles.name}>{Produit.name}</Text>
                 
                </View>
                <Text style={styles.comment}>{Produit.comment}</Text>
                <Text style={styles.price}>{Produit.price}</Text>
              </View>
             
            </View>
             </TouchableOpacity>
          );
        }}/>
        </View>
          </ScrollView>
    );
  }
}
*/ 

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#ffffff",
   // marginTop:10,
     marginBottom:10,
  },
  container: {
    paddingLeft: 5,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    

  },
  content: {
    marginLeft: 16,
  flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,                   
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image:{
    width:100,
    height:108,
    borderRadius:20,
    marginLeft:20
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
    inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      height:45,
      flexDirection: 'row',
      alignItems:'center',
      flex:1,
      margin:10,
      paddingLeft:12,
       shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    elevation: 10,
    },
  
  formContent:{
 marginVertical: 20 ,
    flexDirection: 'row',
    marginTop:50,
  },
  iconInput:{
 width:30,
    height:30,
 marginRight:15,
  justifyContent: 'center',
   
},
inputs:{
   height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
},
text:{
  color: '#C25D5D',
    alignSelf: 'center',
    fontSize: 20,
    marginTop:50,
    
},
})
/*
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}
 

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
*/
