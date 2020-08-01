import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Lender from './Lender/Lender';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

const LenderScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Icon
                    name="account-circle"
                    style={styles.headerIcon}
                    size={50}
                
                
                />
                <View>
    <Text>{props.name} - {props.follow?"Following":"Follow"}</Text>
                    
                </View>
                <Icon
                    name="message"
                    style={styles.headerIcon}
                    size={30}
                
                
                />

            </View>
            <View style={styles.brands}>
                <ScrollView horizontal={true}>
                {props.brands.map(brand=>{
                
                return <Lender
                        key={brand.id}
                        name={brand.name}
                        image={brand.image}
                        price={brand.price}
                        like={brand.like}
                    />
                })}

                </ScrollView>
            
            </View>
            

        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        overflow:"hidden",
        
        width:"100%",
        height:300
    },
    brands:{
        flexDirection:"row",
        height:"80%"
    }
})

export default LenderScreen;
