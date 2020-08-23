import  React  from "react";
import {View, StyleSheet ,Image,ImageBackground, Dimensions} from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Accueil from "../Navigation/TabNavigation";
import Scanner from "./Scanner";

const windowWidth = Dimensions.get('window').width;

export default function DrawerContent(props){
return(
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
        <View style={{flexDirection:'column'}} >
     <ImageBackground style={{width:300, height:200,justifyContent: 'center',
    alignItems: 'center'}} source={require('./pink.jpg')}>
     <Image style={{width:140, height:140,borderRadius:70,borderColor:'white',borderWidth:2}} source={require('./visage.png')}>
         
         </Image>
         <Text style={{fontSize:30,fontWeight:'bold', color:'black', alignSelf:'center', marginTop:15}}>Hana Harad</Text>  
     </ImageBackground>
  

    
     <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                               
                                color={'black'}
                                size={size}
                                />
                            )}
                            label="Accueil"
                            options={{ title: 'My home' }}
                           onPress={() => {props.navigation.navigate('Accueil')}}
                          
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="history" 
                                color={'black'}
                                size={size}
                                />
                            )}
                            label="Historique"
                            onPress={() => {props.navigation.navigate('Scanner')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="heart" 
                                color={'black'}
                                size={size}
                                />
                            )}
                            label="Favoris"
                            onPress={() => {props.navigation.navigate('Favoris')}}
                        />
                   <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bell" 
                                color={'black'}
                                size={size}
                                />
                            )}
                            label="Notification"
                            onPress={() => {props.navigation.navigate('Notification')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={'black'}
                                size={size}
                                />
                            )}
                            label="Profil"
                            onPress={() => {props.navigation.navigate('Profil')}}
                        />
                      
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="questioncircle" 
                                color={'black'}
                                size={size}
                                />
                            )}
                            label="Aide"
                            onPress={() => {props.navigation.navigate('Aide')}}
                        />
                          <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={'black'}
                              
                                size={size}
                                />
                            )}
                            label="Paramètre"
                            onPress={() => {props.navigation.navigate('Parametres')}}
                        />
                        
                    </Drawer.Section>
                    <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={'black'}
                        size={size}
                        />
                    )}
                    label="Deconnexion"
                    onPress={() => {('Deconnexion')}}
                />
            </Drawer.Section>
         </View>
       
                    </DrawerContentScrollView>
    </View>
);


}

const styles = StyleSheet.create({
 
   
 
    drawerSection: {
      marginTop: 35,
    },
  
    bottomDrawerSection: {
        marginBottom: 35,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 4
    },
  });
