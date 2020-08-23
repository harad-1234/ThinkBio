import React from "react";
import { createBottomTabNavigator } from   "@react-navigation/bottom-tabs";

import { Rechercher, AjouterPR,Accueil1, Scanner1 , Recommendation1} from "./StackNavigation";
import { StyleSheet ,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab =  createBottomTabNavigator();

export default function TabNavigation  ()  {
  return (
    <Tab.Navigator >
       <Tab.Screen name=" Accueil " component={ Accueil1 } 
       options={{
        tabBarLabel: 'Accueil',
         title: 'My home',
          tabBarColor:'#F5A9F2',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Rechercher" component={Rechercher} 
       options={{

        tabBarIcon: () => {
          return <Image
          source={require('../src/images/rechercher.png')}
          style={styles.icon}/>
        }
        }}
      />
      
      <Tab.Screen name="Ajouter" component={AjouterPR} 
       options={{

        tabBarIcon: () => {
          return <Image
          source={require('../src/images/plus.png')}
          style={styles.icon}/>
        }
        }}
      />
      <Tab.Screen name="Scanner" component={Scanner1} 
       options={{

        tabBarIcon: () => {
          return <Image
          source={require('../src/images/Scanner.png')}
          style={styles.icon}/>
        }
        }}
      />
      <Tab.Screen name="Recommendation" component={Recommendation1} 
       options={{
   
        tabBarIcon: () => {
          return <Image 
          source={require('../src/images/point.png')}
   
          style={styles.icon}/>
        }
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  icon:{
    width:30,
    height:30
  },
  text:{
    color:'black'
  }
});

