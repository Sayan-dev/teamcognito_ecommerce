import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import FlatButton from "../shared/button.js";


export default function LoginFail() {
  return (
    <View style={styles.container}>
      <View>
            <Image
            source={require("../assets/blacklogo.png")}
            style={styles.errorImage}
            />
      </View>
      <View style={{width: 310}}>
      <Text style={{fontSize:22, fontWeight:'bold', textAlign:"center", marginBottom:10}}>Whoops!</Text>
       <Text style={{textAlign:"center", marginBottom:100}}>Sorry, but nothing matched your login credential.Please try some different login credential.</Text>
      
        <TouchableOpacity>
          <FlatButton text="Back to Login"></FlatButton>
        </TouchableOpacity>
        
      </View>

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
  },
  errorImage: {
      flex: 1,
      height:300,
      width: 300,
      marginTop: 90

  }
  
});
