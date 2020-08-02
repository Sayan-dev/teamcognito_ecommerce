import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Lender from './Lender/Lender';
import {ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';

const LenderScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={{flexDirection:"row",width:"80%",height:"100%"}}>
        <Icon name="account-circle" style={styles.headerIcon} size={50} color="grey"/>
        <View style={{flexDirection: 'column'}}>
          <Text style={{paddingHorizontal: '4%'}}>
            {props.name} .<Text style={{color:"#46D5D8"}}> {props.follow ? 'Following' : 'Follow'}</Text>
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="place"
              style={{...styles.headerIcon, paddingHorizontal: 2}}
              size={15}
            />
            <Text style={{color:"grey"}}>{props.place}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Icon
              name="star"
              style={{...styles.headerIcon, paddingHorizontal: 2}}
              size={15}
              color="gold"
            />
            <Text style={{color:"grey"}}>{props.rating}</Text>
          </View>
        </View>


        </View>
        
        <View style={{justifyContent:"center"}}>
          <Icon name="message" style={styles.headerIcon} size={30} color="grey"/>
        </View>
      </View>
      <View style={styles.brands}>
        <ScrollView horizontal={true}>
          {props.brands.map((brand) => {
            return (
              <Lender
                key={brand.id}
                name={brand.name}
                title={brand.title}
                image={brand.image}
                price={brand.price}
                like={brand.like}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',

    width: '100%',
    height: 400,
    borderWidth: 0.5,
    borderColor: 'grey',
    paddingBottom: 50,
  },
  heading: {
    paddingTop: '10%',
    paddingBottom: '10%',
    flexDirection: 'row',
    width: '100%',
  },
  brands: {
    flexDirection: 'row',
    height: '80%',
  },
  headerIcon:{
      marginLeft:15
  }
 
});

export default LenderScreen;
