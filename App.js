/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { createContext, useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  Button
} from 'react-native';


import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AuthScreen from './src/screens/auth/Auth';
import AsyncStorage from '@react-native-community/async-storage';

// import MainTabsScreen from './src/screens/MainTabsScreen/MainTabsScreen';
import HomeScreen from './src/screens/Home/Home';
import Header from './src/shared/header';
import LoginFail from './src/screens/auth/Loginfail';

const Stack = createStackNavigator();
const Drawer=createDrawerNavigator();


const App= () => {
  
    const ThemeContext = createContext('light');
    const [login,setLogin]=useState(false);
    const dimensions = useWindowDimensions();

    useEffect(()=>{
      const getToken=async()=>{
        const token = await AsyncStorage.getItem('token');
        if(token){
          console.log(token)
          setLogin(false);
        }
      }
      getToken()

    },[])
    const logOutHandler=async ()=>{
      try {
          await AsyncStorage.clear()
        } catch(e) {
          // clear error
        }
      
        console.log('Done.')
    setLogin(false)
    //  navigation.navigate('Home');
  }
  
    return (
      <ThemeContext.Provider value="dark">
        <NavigationContainer>
  <Stack.Navigator initialRouteName={!login?"Auth":"Home"}
            screenOptions={{
              headerShown: false
            }}
            >
  
          {!login?<Stack.Screen name="Auth"  >
  
          {props => <AuthScreen {...props} login={setLogin} />}
  
          </Stack.Screen>:
          <Stack.Screen name="Home"  options={{ title: 'Home',
          headerRight: () => (
            <Button
              onPress={logOutHandler}
              title="Logout"
            />
          ), }}>
  
          {props => <HomeScreen {...props}/>}
  
          </Stack.Screen>}
         <Stack.Screen name="LoginFail" >
           {props=><LoginFail {...props}/>}
         </Stack.Screen>
        </Stack.Navigator>
        </NavigationContainer>
  
  
      </ThemeContext.Provider>
  
    );
  };
  


export default App;
