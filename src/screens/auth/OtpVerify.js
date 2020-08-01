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
import OTPInputView from '@twotalltotems/react-native-otp-input';

import AsyncStorage from '@react-native-community/async-storage';
import {Icon} from 'react-native-elements';

export default function OtpSend({navigation, title}) {
  const otpResetHandler = async () => {
    const value = 'Mango Tune';
    try {
      await AsyncStorage.setItem('token', value);
    } catch (e) {
      // save error
      navigation.navigate('LoginFail');
    }

    console.log('Done.');
    navigation.navigate('LoginFail');
    register(false);
    //  navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.icon}>
        <Icon
          name="arrow-back"
          type="ionicon"
          size={40}
          onPress={() => {
            navigation.pop();
          }}
          style={styles.icon}
        />
      </View>

      <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 17, paddingBottom:5,paddingTop:100}}>
        Verify Email Adress
      </Text>
      <Text style={{color: 'white'}}>An email has been sent to</Text>
      <Text>
      <Text style={{color: 'white'}}>
        {' '}
        name@gmail.com.
        <Text
          style={{
            color: 'white',
            borderBottomWidth: 0.5,
            borderBottomColor: 'white',
          }}
          onPress={() => Linking.openURL('http://google.com')}>
          Wrong email?
        </Text>
      </Text>
      </Text>

      <OTPInputView
        style={{width: '80%', height: 100, color: '#46D5D8'}}
        pinCount={5}
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({code})}}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {
          alert(`Code is ${code}, you are good to go!`);
          //Some backend processing
          navigation.replace('PasswordReset')
        }}
      />
      <Text
          style={{
            color: 'white',
            borderBottomWidth: 0.8,
            borderBottomColor: 'white',
            paddingTop:30
          }}
          onPress={() => Linking.openURL('http://google.com')}>
          Resend EMAIL?
        </Text>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height:"100%",
    alignItems: 'center',
    textAlign: 'left',
    backgroundColor: '#3FBBBD',
  },

  icon: {
    width:"100%",
    alignItems: 'flex-start',
    padding: 10,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },
  codeInputFieldStyle: {
    backgroundColor: '#46D5D8',
  },
  borderStyleHighLighted: {
    // borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 42,
    height: 45,
    borderWidth: 0,
    borderWidth: 1,
    backgroundColor: '#10DFE3',
  },

  underlineStyleHighLighted: {
    // borderColor: "#03DAC6",
  },
});
