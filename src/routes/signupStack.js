import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Header from "../shared/header";
import Auth from "../screens/auth/Auth";
import LoginFail from "../screens/auth/Loginfail";
import Register from "../screens/auth/Register";

// const screens = {
//   Login: {
//     screen: Login,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitle: () => <Header title="Cake Shop" navigation={navigation} />,
//       };
//     },
//   },
// };
const Stack=createStackNavigator();
const SignUpStack =({navigation})=> {
 return(
  <Stack.Navigator mode="modal"
  initialRouteName="Register"
  screenOptions={{ 
    gestureEnabled: false,
    headerShown: false,
    
  }}
>
  <Stack.Screen
    name="Register"
    
    options={{ title: '' }}
  >
    {props=><Register {...props}/>}
  </Stack.Screen>
  {/* <Stack.Screen
    name="LoginFail"
  >
    {props=><LoginFail {...props}/>}
  </Stack.Screen> */}
</Stack.Navigator>
 )
 
};

export default SignUpStack;
