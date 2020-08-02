import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
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
                <View style={{flexDirection:"column"}}>
                <Text style={{paddingHorizontal:"1%"}}>{props.name} - {props.follow?"Following":"Follow"}</Text>
                <View style={{flexDirection:"row"}}>
                <Icon
                    name="place"
                    style={{...styles.headerIcon,paddingHorizontal:2,}}
                    size={15}
                    
                
                
                /><Text>{props.place}</Text>

                </View>
   
    
                <View style={{flexDirection:"row"}}>
                <Icon
                    name="star"
                    style={{...styles.headerIcon,paddingHorizontal:2,}}
                    size={15}
                    color="gold"
                
                
                />
                    <Text>{props.rating}</Text>
                    
                    </View>
   
                    
                </View>

              
                <View style={!props.follow?{left:"230%"}:{left:"200%"}}>
                <Icon
                    name="message"
                    style={styles.headerIcon}
                    size={30}
                
                
                />
                </View>
                

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
        height:400
    },
    heading:{
        paddingTop:"10%",
        paddingBottom:"10%",
        flexDirection:"row",
        borderWidth:1,
        width:"100%"
    },
    brands:{
        flexDirection:"row",
        height:"80%"
    }
})

export default LenderScreen;
