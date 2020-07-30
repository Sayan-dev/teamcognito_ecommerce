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
import { Icon } from 'react-native-elements'


export default function Login({navigation,title}) {
  const loginHandler=async()=>{
    const value="Mango Tune"
    try {
        await AsyncStorage.setItem('token', value)
      } catch(e) {
        // save error
        navigation.navigate('LoginFail');
      }
    
      console.log('Done.')
      navigation.navigate('LoginFail');
  login(false)
  //  navigation.navigate('Home');
}


  return (
    
    
    <View style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.icon}>
        <Icon
        name="close"
        size={50}
        onPress={()=>{navigation.navigate('Home')}}
        // style={styles.icon}
      />
        </View>
  
      
      <View style={styles.headerTitle}>
        <Image
          source={{
            uri:"https://static.toiimg.com/photo/72975551.cms"
          }}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
       </View> 

      </View>

      <View style={styles.subContainer}>

      <Text style={styles.textInput}>Phone number / Email Adress</Text>
      <TextInput style={styles.input} />
      <Text style={styles.textInput}>Password</Text>
      <TextInput style={styles.input} />
      <View style={styles.buttons}>
        <TouchableOpacity>
          <FlatButton onPress={loginHandler} text="Log In" color="#46D5D8"></FlatButton>
        </TouchableOpacity>
      </View>

      <Text style={styles.textInput}>
        Forgot your password?{" "}
        <Text style={{ fontWeight: "bold" }}>Get Help with signing in</Text>
      </Text>

      <View style={{paddingTop:30,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
        <View style={{width:"40%",borderWidth:0.5,borderColor:"black",height:1,margin:10 }}></View>
        <Text>or</Text>
        <View style={{width:"40%",borderWidth:0.5,borderColor:"black",height:1,margin:10}}></View>
      </View>
      <View style={{flexDirection:"row",paddingTop:20,alignItems:"center",justifyContent:"center"}}>
      <View style={styles.social}>
        <TouchableOpacity>
          <FlatButton onPress={loginHandler} text="Facebook" color="#0D47A1"></FlatButton>
        </TouchableOpacity>
      </View>
      <View style={styles.social}>
        <TouchableOpacity>
          <FlatButton onPress={loginHandler} text="Google" color="#F44336"></FlatButton>
        </TouchableOpacity>
      </View>
      </View>
      <View style={{paddingTop:30,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
        <View style={{width:"40%",borderWidth:0.5,borderColor:"black",height:1,margin:10 }}></View>
        <Text>or</Text>
        <View style={{width:"40%",borderWidth:0.5,borderColor:"black",height:1,margin:10}}></View>
      </View>


      <View style={{...styles.buttons,marginTop:30}}>
        <TouchableOpacity>
          <HollowButton text="Sign Up" color="white"></HollowButton>
        </TouchableOpacity>
      </View>
      </View>



    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom:200,
    alignItems: "center",
    textAlign:"left"

    
  },
  subContainer:{
    alignItems: "center",
    width:"90%",
    margin:20
  },
  buttons:{
    width:"100%"
  },
  social:{
    width:"40%",
    marginRight:"6%",
    marginLeft:"6%"
  },  
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
  },
  textInput: {
    padding:10,
    color: "grey",
    
  },
  header: {
    backgroundColor:"#46D5D8",
    width: "100%",
    height: "40%",
    flexDirection: "column",

  },
  icon:{
    alignItems:"flex-end",
    padding:10
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#333",
    letterSpacing: 1,
    paddingTop: 10,
  },
  headerTitle: {
    flexDirection: "row",
    paddingTop:20,
    alignItems:"center",
    justifyContent:"center"
  },
  headerImage: {
    width:200,
    height: 200,
  
  },
});
