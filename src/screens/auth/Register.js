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
import {HollowButton} from '../../shared/button';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import {Icon} from 'react-native-elements';
import {globalStyles, darkbg} from '../../styles/global'


export default function Register({navigation, title}) {
  const registerHandler = async () => {
    // const value = 'Mango Tune';
    // try {
    //   await AsyncStorage.setItem('token', value);
    // } catch (e) {
    //   // save error
    //   navigation.navigate('LoginFail');
    // }

    // console.log('Done.');
    navigation.navigate('Home',{modal:true});
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
        <Text style={globalStyles.lightTitleText}>Email Adress                                                                         </Text>
        <TextInput style={globalStyles.input} />
        <Text style={globalStyles.lightTitleText}>Phone Number                                                                         </Text>
        <TextInput style={globalStyles.input} />
        <Text style={globalStyles.lightTitleText}>Full Name                                                                         </Text>
        <TextInput style={globalStyles.input} />
        <Text style={globalStyles.lightTitleText}>Password                                                                         </Text>
        <TextInput style={globalStyles.input} />
        <Text style={globalStyles.lightTitleCenterText}>
          Password should be at least 6 characters and contain numbers, special character, and a capital letter
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <FlatButton
              onPress={registerHandler}
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
              borderColor: darkbg,
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
    margin: 20,
  },
  buttons: {
    width: '100%',
    
  },
  
   textInput1: {
    padding: 10,
    color: darkbg,
  },
  
  header: {
    backgroundColor: darkbg,
    width: '100%',
    height: '30%',
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
