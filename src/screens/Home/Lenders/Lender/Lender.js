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
                <View style={{position:"absolute",top:"80%",left:"75%"}}>
                {
                props.like?<Icon
                    name="favorite"
                    size={30}
                    color="white"
                />:<Icon
                name="favorite-border"
                size={30}
                color="white"
                />
            }

                </View>
                           
            </View>
            <Text>{props.name}</Text>
            <Text>{props.price}</Text>
 

        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        height:"100%",
        marginHorizontal:10
    },
    image:{
        
        width:150,
        height:"60%"
    }
})

export default Lender;