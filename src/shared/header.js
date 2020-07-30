import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ title }) {


  return (
    <ImageBackground style={styles.header}>
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
        <Text style={styles.headerText}>{title}</Text>
       </View> 
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
    flexDirection: "row",
  },
  headerImage: {
    width:"50%",
    height: 300,
    marginHorizontal: 0,
    left:20
  },
  
});