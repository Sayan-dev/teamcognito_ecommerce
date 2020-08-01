import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';


const Lender = (props) => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.image}>
                <Image
                    source={{
                        uri:props.image
                    }}
                />
            </View> */}
            <Text>{props.name}</Text>
            <Text>{props.price}</Text>
            {
                props.like?<Icon
                    name="favorite"
                />:<Icon
                name="favorite-border"
            />
            }

        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        height:"100%"
    }
})

export default Lender;