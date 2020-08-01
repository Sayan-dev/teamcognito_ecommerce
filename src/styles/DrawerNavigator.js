import React from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';
import {Text, Drawer} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';

const DrawerNavigator = (props) => {
    return (
        <View style={styles.container}>
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
        {/* <Text style={styles.headerText}>Mango</Text> */}
       </View> 
    </ImageBackground>

            </View>

        <DrawerContentScrollView {...props}>
            <View>
                <Text>
                    Main Tabs
                </Text>
            </View>
            
        </DrawerContentScrollView>
        <Drawer.Section style={{justifyContent:"flex-start",width:"100%"}}>
            <Drawer.Item

                icon={()=><Icon 
                    name="exit-to-app"
                    size={30}
                    />}

                label="Close"
                onPress={()=>props.navigation.toggleDrawer()}

             />       
                    



        </Drawer.Section>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        backgroundColor:"#ffffff",
    },
    header:{
        width:"100%",
        height:"10%",
        backgroundColor:"#46D5D8"
    },
    headerImg:{
        padding:10,
        width:"30%",
        height:"100%",
    },
    headerImage:{
        borderRadius:50,
        height:"100%",
        width:"100%"
    }
})

export default DrawerNavigator;