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
import { Icon } from 'react-native-elements';
import {SocialButton} from "../../shared/button";
import {globalStyles, darkbg} from '../../styles/global';



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
const forgotHandler=()=>{

  navigation.push('ForgotPass')
}

  return (
    
    
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.icon}>
        <Icon
        name="close"
        size={40}
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

      <Text style={globalStyles.lightTitleText}>Phone number / Email Adress</Text>
      <TextInput style={globalStyles.input} />
      <Text style={globalStyles.lightTitleText}>Password</Text>
      <TextInput style={globalStyles.input} />
      <View style={styles.buttons}>
        <TouchableOpacity>
          <FlatButton onPress={loginHandler} text="Log In"></FlatButton>
        </TouchableOpacity>
      </View>

      <Text style={globalStyles.lightTitleCenterText}>
        Forgot your password?{" "}
        <Text onPress={forgotHandler} style={{ fontWeight: "bold" }}>Get Help with signing in</Text>
      </Text>

      <View style={{paddingTop:10,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
        <View style={{width:"30%",borderWidth:0.5,borderColor:"#4A4A4A",height:1,margin:5 }}></View>
        <Text style={{fontFamily:"Roboto Thin", color:"#A3A3A3"}}>or connect with</Text>
        <View style={{width:"30%",borderWidth:0.5,borderColor:"#4A4A4A",height:1,margin:5}}></View>
      </View>
      <View style={{flexDirection:"row",paddingTop:10,alignItems:"center",justifyContent:"center"}}>
      <View style={styles.social}>
        <TouchableOpacity>
          <SocialButton onPress={loginHandler} text="Facebook" color="#0D47A1"></SocialButton>
        </TouchableOpacity>
      </View>
      <View style={styles.social}>
        <TouchableOpacity>
          <SocialButton onPress={loginHandler} text="Google" color="#F44336"></SocialButton>
        </TouchableOpacity>
      </View>
      </View>
      <View style={{paddingTop:10,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
        <View style={{width:"45%",borderWidth:0.5,borderColor:"#4A4A4A",height:1,margin:5 }}></View>
        <Text style={{fontFamily:"Roboto Thin", color:"#A3A3A3"}}>or</Text>
        <View style={{width:"45%",borderWidth:0.5,borderColor:"#4A4A4A",height:1,margin:5}}></View>
      </View>


      <View style={{...styles.buttons,marginTop:0}}>
        <TouchableOpacity>
          <HollowButton text="Sign Up" color="#33ABB3"></HollowButton>
        </TouchableOpacity>
      </View>
      </View>



    </ScrollView>
    
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
    margin:10
  },
  buttons:{
    width:"100%"
  },
  social:{
    width:"40%",
    marginRight:"6%",
    marginLeft:"6%"
  },  
  
  textInput: {
    padding:10,
    color: "grey",
    
  },
  header: {
    backgroundColor:darkbg,
    width: "100%",
    height: "30%",
    flexDirection: "column",

  },
  icon:{
    alignItems:"flex-end",
    padding:0
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
    width:100,
    height: 100,
  
  },
});
