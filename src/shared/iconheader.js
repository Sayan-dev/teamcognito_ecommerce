import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default function IconHeader({ title, navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    
      // <MaterialIcons
      //   name="menu"
      //   size={28}
      //   onPress={openMenu}
      //   style={styles.icon}
      // />
      <View>Hello</View>
   
  );
}

const styles = StyleSheet.create({
  
  icon: {
    position: "absolute",
    left: 10,
    
  },
  
  
});