import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const AuthScreen = ({ navigation, route ,login}) => {
    const loginHandler=async()=>{
        const value="Mango Tune"
        try {
            await AsyncStorage.setItem('token', value)
          } catch(e) {
            // save error
          }
        
          console.log('Done.')
      login(true)
      //  navigation.navigate('Home');
    }
 
    return (
        <View style={styles.container}>
            <Text>Auth screen</Text>
            <TouchableOpacity>
                <Button onPress={loginHandler} title="Login"></Button>
            </TouchableOpacity>
        </View>
    );
};
AuthScreen.options = {
    topBar: {
      title: {
        text: 'Auth',
        color: 'white',
     
      },
      
      background: {
        color: '#1976D2'
      }
    }
  }
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"whitesmoke",
        alignItems:"center",
        justifyContent:"center"
    }
})

export default AuthScreen;