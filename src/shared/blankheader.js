import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";

export default function BlankHeader({ title,navigation }) {


  return (
    <View style={styles.header}>
<ImageBackground style={styles.headerImg}>
      {/* <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      /> */}
      <View style={styles.headerTitle}>
        <Image
          source={{
            uri:"https://static.toiimg.com/photo/72975551.cms"
          }}
          style={styles.headerImage}
        />
        {/* <Text style={styles.headerText}>{title}</Text> */}
       </View> 
    </ImageBackground>
    </View>
    
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,

  },
  headerImg:{
    width:"28%",
    height:"100%"
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#333",
    letterSpacing: 1,
    paddingTop: 10,
  },
  icon: {

    
  },
  headerTitle: {
    padding:5,
    alignItems:"flex-start",
    width:"100%",
    height:"100%",
    flexDirection: "row",
  },
  headerImage: {
    borderRadius:50,

    width: "100%",
    height: "100%",
    
  },
  
});