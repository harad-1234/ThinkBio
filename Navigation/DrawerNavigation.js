import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet ,Image} from 'react-native';
import Accueil from "./TabNavigation";
import Scanner from "../Component/Scanner";
import DrawerContent  from  "../Component/DrawerContent";


const Drawer = createDrawerNavigator();  



export default function  DrawerNavigation ()  {
    return (
        <Drawer.Navigator options={{ title: 'My home' }} drawerContent={props => <DrawerContent {...props} />}>
       <Drawer.Screen name="Accueil" component={Accueil} 
        options={{
          title: 'My home' ,
          drawerIcon: config => <Image
          source={require('../src/images/home.png')}
          style={styles.icon}/>
      }}
        />
        <Drawer.Screen name="Scanner" component={Scanner} 
        options={{
          drawerIcon: config => <Image
          source={require('../src/images/Scanner.png')}
          style={styles.icon}/>
      }}
        />
        


      </Drawer.Navigator>
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
  
  