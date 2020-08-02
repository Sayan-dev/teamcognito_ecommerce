import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';


const Lender = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image
                    source={{
                        uri:props.image
                    }}
                    style={{width:"100%",height:"100%"}}
                />
                <View style={{position:"absolute",top:"80%",left:"70%"}}>
                {
                props.like?<Icon
                    name="favorite"
                    size={25}
                    color="white"
                    
                />:<Icon
                name="favorite-border"
                size={25}
                color="white"
                />
            }

                </View>
                           
            </View>
            <Text>{props.name}</Text>
            <Text style={{color:"grey"}}>{props.title}</Text>
            <Text style={{color:"grey"}}>{props.price}</Text>
 

        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        height:"100%",
        marginHorizontal:10
    },
    image:{
        
        width:110,
        height:"60%"
    }
})

export default Lender;