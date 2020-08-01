import { createDrawerNavigator } from "@react-navigation/drawer";
import { createAppContainer } from "@react-navigation/native";

// stacks
import React from "react"
import HomeStack from "./homeStack";
import LoginStack from "./loginStack";
import SignUpStack from "./signupStack";

// drawer navigation options
const Drawer=createDrawerNavigator()
const RootDrawerNavigator = ()=>{


  return(
    <Drawer.Navigator drawerType={'front'} drawerStyle={{ width: '60%' }} initialRouteName="Home">
     {/* <Drawer.Screen name="LoginFail">
        {props=><LoginFailStack {...props}/>}
     </Drawer.Screen> */}
     <Drawer.Screen name="Login">
        {props=><LoginStack {...props}/>}
     </Drawer.Screen>
     <Drawer.Screen name="Home">
        {props=><HomeStack {...props}/>}
     </Drawer.Screen>
     <Drawer.Screen name="Register">
        {props=><SignUpStack {...props}/>}
     </Drawer.Screen>
     
     </Drawer.Navigator>
    )
  
};

export default RootDrawerNavigator;
