import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {FlatButton} from '../../shared/button';
import {globalStyles, darkbg} from '../../styles/global';
import AsyncStorage from '@react-native-community/async-storage';
import {Icon} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default function PasswordFail({navigation, title}) {
  const passwordHandler = async () => {
    // const value = 'Mango Tune';
    // try {
    //   await AsyncStorage.setItem('token', value);
    // } catch (e) {
    //   // save error
    //   navigation.navigate('LoginFail');
    // }

    console.log('Done.');
    navigation.push('OtpVerify');
    // register(false);
    //  navigation.navigate('Home');
  };

  return (
    <SafeAreaView>
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.header}>
        <View style={styles.icon}>
          <Icon
            name="close"
            size={50}
            onPress={() => {
              navigation.navigate('Home');
            }}
            // style={styles.icon}
          />
        </View>

        <View style={styles.headerTitle}>
          <Image
            source={{
              uri: 'https://static.toiimg.com/photo/72975551.cms',
            }}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}>{title}</Text>
        </View>
      </View>
      <View style={styles.subContainer}>
      <Text style={globalStyles.titleText}>Forgot Your Password                       </Text>
      <Text style={{color:"#4A4A4A", paddingBottom:5}}>Don't worry, we've got you covered. Type in your email adress or phone number you used to register and we'll send you a verification code</Text>
        <Text style={globalStyles.lightTitleText}>Email Adress                                                                        </Text>
        <TextInput style={globalStyles.input} />
        <View style={{paddingTop:10,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
        <View style={{width:"45%",borderWidth:0.5,borderColor:"black",height:1,margin:10 }}></View>
        <Text style={{fontFamily:"Roboto Thin", color:"#A3A3A3"}}>or</Text>
        <View style={{width:"45%",borderWidth:0.5,borderColor:"black",height:1,margin:10}}></View>
      </View>
        <Text style={globalStyles.lightTitleText}>Phone number                                                                   </Text>
        <TextInput style={globalStyles.input} />
        
        <View style={styles.buttons}>
          <TouchableOpacity>
            <FlatButton
              onPress={passwordHandler}
              text="CONTINUE"
></FlatButton>
          </TouchableOpacity>
        </View>


        <View
          style={{
            flexDirection: 'row',
            paddingTop: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}></View>
        <View
          style={{
            paddingTop: 0,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '100%',
              borderWidth: 0.5,
              borderColor: '#46D5D8',
              height: 1,
              margin: 10,
            }}></View>
        </View>
        <Text style={styles.textInput1}>
          Have an account?{' '}
          <Text style={{fontWeight: 'bold'}}>Login</Text>
        </Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 200,
    alignItems: 'center',
    textAlign: 'left',
  },
  subContainer: {
    alignItems: 'center',
    width: '90%',
    margin: 10,
  },
  buttons: {
    width: '100%',
    
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
  textInput: {
    padding: 8,
    color: 'grey',

  },
   textInput1: {
    padding: 10,
    color: darkbg,
  },
  
  header: {
    backgroundColor: darkbg,
    width: '100%',
    height: '44%',
    flexDirection: 'column',
  },
  icon: {
    alignItems: 'flex-end',
    padding: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#333',
    letterSpacing: 1,
    paddingTop: 10,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: 100,
    height: 100,
    
  },
});