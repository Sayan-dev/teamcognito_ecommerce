import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Header from "../shared/header";
import Auth from "../screens/auth/Auth";
import LoginFail from "../screens/auth/Loginfail";
import PasswordFail from "../screens/auth/Passwordfail";
import OtpVerifyScreen from "../screens/auth/OtpVerify";
import PasswordReset from "../screens/auth/Passwordreset";
import UserProfileSetFlat from "../shared/Userprofilemodal";

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
const LoginStack =({navigation})=> {
 return(
  <Stack.Navigator mode="modal"
  initialRouteName="Login"
  screenOptions={{ 
    gestureEnabled: false,
    headerShown: false,
    
  }}
>
  <Stack.Screen
    name="Login"
    
    options={{ title: '' }}
  >
    {props=><Auth {...props}/>}
  </Stack.Screen>
  <Stack.Screen
    name="LoginFail"
  >
    {props=><LoginFail {...props}/>}
  </Stack.Screen>
  <Stack.Screen
    name="ForgotPass"
  >
    {props=><PasswordFail {...props}/>}
  </Stack.Screen>
  <Stack.Screen
    name="OtpVerify"
  >
    {props=><OtpVerifyScreen {...props}/>}
  </Stack.Screen>
  <Stack.Screen
    name="PasswordReset"
  >
    {props=><PasswordReset {...props}/>}
  </Stack.Screen>
  <Stack.Screen
    name="UserProfile"
  >
    {props=><UserProfileSetFlat {...props}/>}
  </Stack.Screen>
</Stack.Navigator>

 )
 
};

export default LoginStack;
