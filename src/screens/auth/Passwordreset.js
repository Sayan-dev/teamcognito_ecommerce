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

import AsyncStorage from '@react-native-community/async-storage';
import {Icon} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default function PasswordReset({navigation, title}) {
  const passwordResetHandler = async () => {
    // const value = 'Mango Tune';
    // try {
    //   await AsyncStorage.setItem('token', value);
    // } catch (e) {
    //   // save error
    //   navigation.navigate('LoginFail');
    // }

    // console.log('Done.');
    navigation.popToTop();
    navigation.navigate('Home');
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
              navigation.navigate('ForgotPass');
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
  
        <Text style={styles.textInput}>Password</Text>
        <TextInput style={styles.input} />
        
        <Text style={styles.textInput}>Retype Password</Text>
        <TextInput style={styles.input} />
        <Text style={{textAlign:"center", color: "grey", paddingTop:10}}>Password should be atleast 6 characters and contain numbers, special character, and a capital letter</Text>
        
        <View style={styles.buttons}>
          <TouchableOpacity>
            <FlatButton
              onPress={passwordResetHandler}
              text="CONTINUE"
              color="#46D5D8"></FlatButton>
          </TouchableOpacity>
        </View>


        
        
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
    margin: 20,
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
    marginBottom: 15,
  },
  textInput: {
    width:"100%",
    padding: 8,
    color: 'grey',

  },
   textInput1: {
    padding: 10,
    color: '#46D5D8',
  },
  
  header: {
    backgroundColor: '#46D5D8',
    width: '100%',
    height: '55%',
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
    paddingTop: 50
  },
  headerImage: {
    width: 100,
    height: 100,
  
    
  },
});