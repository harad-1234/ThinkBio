import React from 'react';
import Login from "../Component/Login";
import Sinscrire from "../Component/Sinscrire";
import DrawerNavigation from "../Navigation/DrawerNavigation";
import { createStackNavigator } from '@react-navigation/stack';



const RootStack = createStackNavigator();

export default function  StackNavigation ({navigation})  {
    return (
        <RootStack.Navigator>
             <RootStack.Screen name="Login" component={Login} />

             <RootStack.Screen name="Sinscrire" component={Sinscrire}/>
             <RootStack.Screen name="DrawerNavigation" component={DrawerNavigation}/>
        </RootStack.Navigator>
    );
}