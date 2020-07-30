import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export function FlatButton({ text, onPress,color }) {
  return (
    
    <TouchableOpacity onPress={onPress}>
      <View style={{...styles.button,backgroundColor:color}}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function HollowButton({ text, onPress,color }) {
  return (
    
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button1}>
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
    borderColor: '#46D5D8',
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