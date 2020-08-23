import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet ,Image} from 'react-native';
import Accueil from "../Component/Accueil"; 
import Login from '../Component/Login';
import Sinscrire from '../Component/Sinscrire'
import { IconButton,} from "react-native-paper";
import DrawerNavigation from "./DrawerNavigation"

const Stack = createStackNavigator();  



export default function  StackNavigation ({navigation})  {
    return (
        <Stack.Navigator >
       <Stack.Screen name="Login" component={Login} 
        options={{
          drawerIcon: config => <Image
          source={require('../src/images/home.png')}
          style={styles.icon}/>
      }}
        />
        <Stack.Screen name="Sinscrire" component={Sinscrire} 
        options={{
          drawerIcon: config => <Image
          source={require('../src/images/home.png')}
          style={styles.icon}/>
      }}
        />
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation } 
       
        
         
  
        />
       
        


      </Stack.Navigator>
    );
  }

  const styles = StyleSheet.create({
    icon:{
      width:20,
      height:20
    },
    text:{
      color:'black'
    }
  });
  
  