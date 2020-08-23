import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Catégorie from "../Component/Catégorie";
import Consulter from "../Component/Consulter";
import Catégories from "../Component/Catégories";
import Ajouter from "../Component/Ajouter";
import Accueil from "../Component/Accueil";
import Scanner from "../Component/Scanner";
import Recommendation from "../Component/Recommendation";
import AjouterProduit from "../Component/AjouterProduit";
import AjouterRecette from "../Component/AjouterRecette";
import ListeRecette from "../Component/ListeRecette";
import Listeproduit from "../Component/Listeproduit";
import Information from "../Component/Information";
import Composant from "../Component/Composant";
import Altérnatives from "../Component/Altérnatives";
import Commentaire from "../Component/Commentaire";
import Adresse from "../Component/Adresse";
import Recette from "../Component/Recette";
import { IconButton, Button,Image } from "react-native-paper";
import Login from "../Component/Login";
import Sinscrire from "../Component/Sinscrire";


  const Stack = createStackNavigator();
function  Accueil1 ({navigation})  {
  return (
    <Stack.Navigator initialRouteName="Login"
     screenOptions={{
      headerStyle:{
        backgroundColor:'#F5A9F2'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight: 'bold'
      }
    }}>
      <Stack.Screen name="Accueil" component={Accueil}
     options={{
       title:'Accueil',
      
      /* headerLeft:  () => (
        <IconButton   name="menu" size={25}  backgroundColor='#009387' onPress={() => navigation.openDrawer()}>

        </IconButton>
      
       ),*/ 
     }}
   
       />
    
    </Stack.Navigator>
  );
}

 function Rechercher ()  {
    return (
      <Stack.Navigator
       screenOptions={{
        headerStyle:{
          backgroundColor:'pink'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight: 'bold'
        }
      }}>
        <Stack.Screen name="Catégorie" component={Catégorie}  options={{
       title:'Catégories'
       
     }} />
        <Stack.Screen name="Consulter" component={Consulter}  options={{
       title:'Catégories'}}/>

        <Stack.Screen name="ListeRecette" component={ListeRecette}   options={{
       title:'Liste des recettes'}}/>
       <Stack.Screen name="Recette" component={Recette}   options={{
       title:'Description sur la recette'}}/>
        <Stack.Screen name="Listeproduit" component={Listeproduit}  options={{
       title:'Liste des produits'}}/>
        <Stack.Screen name="Information" component={Information}  options={{
       title:'Détail sur le produit '}}/>
        <Stack.Screen name="Composant" component={Composant} />
        <Stack.Screen name="Altérnatives" component={Altérnatives} />
        <Stack.Screen name="Adresse" component={Adresse} /> 
        <Stack.Screen name="Commentaire" component={Commentaire} />
      
      </Stack.Navigator>
    );
  }
   function AjouterPR ()  {
    return (
      <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#009387'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight: 'bold'
        }
      }}>
        <Stack.Screen name="Catégories" component={Catégories}  options={{
       title:'Catégories '}}/>
        <Stack.Screen name="Ajouter" component={Ajouter}  options={{
       title:'Ajouter '}} />
        <Stack.Screen name="AjouterProduit" component={AjouterProduit}  options={{
       title:'Ajouter produit '}}/>
        <Stack.Screen name="AjouterRecette" component={AjouterRecette}  options={{
       title:'Ajouter recette'}}/>
        
      </Stack.Navigator>
    );
  }
  function Scanner1 ()  {
    return (
      <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#009387'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight: 'bold'
        }
      }}>
        <Stack.Screen name="Scanner" component={Scanner}  options={{
       title:'Scanner produit '}}/>
      
      </Stack.Navigator>
    );
  }
  function  Recommendation1 ()  {
    return (
      <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#009387'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight: 'bold'
        }
      }}>
        <Stack.Screen name="Recommendation" component={Recommendation}  options={{
       title:'Recommendation '}}/>
      
      </Stack.Navigator>
    );
  }
  function Authentification (){
    <Stack.Navigator>
       <Stack.Screen name="Login" component={Login}  options={{
       title:'Login'}}/>
       <Stack.Screen name="Sinscrire" component={Sinscrire}  options={{
        title:'Sinscrire '}}/>
      <Stack.Screen name="Accueil" component={Accueil}
     options={{
       title:'Accueil'}}/>
    </Stack.Navigator>
  }
  
  export {Rechercher, AjouterPR, Accueil1,Scanner1, Recommendation1, Authentification}
