import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import {FlatButton} from "../../shared/button";
import {HollowButton} from "../../shared/button";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";

export default function LoginFail({navigation,title}){
  const backToLogin=()=>{
    navigation.navigate("Login");
  }
  return (
    <View style={styles.container}>
      <View>
            <Image
            source={{
              uri:"https://www.freedigitalphotos.net/images/img/homepage/394230.jpg"
            }}
            style={styles.errorImage}
            />
      </View>
      <View style={{width: 310}}>
      <Text style={{fontSize:22, fontWeight:'bold', textAlign:"center", marginBottom:10}}>Whoops!</Text>
       <Text style={{textAlign:"center", marginBottom:100}}>Sorry, but nothing matched your login credential.Please try some different login credential.</Text>
      
        <TouchableOpacity>
          <FlatButton onPress={backToLogin} text="Back to Login" color="#46D5D8"></FlatButton>
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
      
      height:200,
      width: 200,
      marginTop: 90

  }
  
});
