import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export function FlatButton({ text, onPress }) {
  return (
    
    <TouchableOpacity onPress={onPress}>
      <View style={{...styles.button}}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
export function ModalButton({ text, onPress,color }) {
  return (
    
    <TouchableOpacity onPress={onPress}>
      <View style={{...styles.button2,backgroundColor:color}}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
export function SocialButton({ text, onPress, color }) {
  return (
    
    <TouchableOpacity onPress={onPress}>
      <View style={{...styles.button3,backgroundColor:color}}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function HollowButton({ text, onPress,color }) {
  return (
    
    <TouchableOpacity onPress={onPress}>
      <View style={{...styles.button1, borderColor:color}}>
        <Text style={styles.buttonText1}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    width: '100%',
    elevation:1,
    backgroundColor:"#33A3B3",
    marginTop: 20,
    marginBottom:20,
    padding:10
  },
  button2: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    width: '90%',
    elevation:1,
    marginLeft: 20,
    marginTop: 20,
    marginBottom:20,
    padding:10
  },
  button3: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    width: '100%',
    elevation:1,
    marginLeft:5,
    marginTop: 20,
    marginBottom:20,
    padding:10
  },
  
  button1: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderWidth:1,
    elevation:1,
    width: "100%",
    marginTop: 20,
    marginBottom:20
  },
 
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    // textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonText1: {
    color: '#46D5D8',
    fontWeight: 'bold',
    // textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  }
});