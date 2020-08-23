import React from "react";
import { NavigationContainer, } from "@react-navigation/native";

import DrawerNavigation from "./Navigation/DrawerNavigation";
import Stack from "./Navigation/Stack";
import RootStack from  "./Navigation/RootStack";
import Catégories from "./Component/Catégories"


export default function App  ()  {
 
  return (
    <NavigationContainer>
     
    <DrawerNavigation/>
     </NavigationContainer>
  );
}


