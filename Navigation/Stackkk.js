
import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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


const AjouterPR = createStackNavigator({
    Catégories: { screen: Catégories },
    Ajouter: { screen: Ajouter },
    AjouterProduit: { screen:AjouterProduit },
    AjouterRecette: { screen: AjouterRecette },
},
{
  initialRouteName: 'Catégories',


});

export default createAppContainer(AjouterPR);