import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Picker, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import {FlatButton} from '../../shared/button';
import AsyncStorage from '@react-native-community/async-storage';
import LenderScreen from './Lenders/LenderScreen';


const lenders=[
  {
    id:1,
    name:"Mango Boy",
    follow:false,
    rating:4.9,
    brands:[
      {
        id:1,
        name:"Abcd Efgh",
        image:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price:79.99,
        like:false
      },
      {
        id:2,
        name:"Abcd Efgh",
        image:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price:79.99,
        like:true
      },
      {
        id:3,
        name:"Abcd Efgh",
        image:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price:79.99,
        like:false
      },
      {
        id:4,
        name:"Abcd Efgh",
        image:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price:79.99,
        like:false
      }
    ]
  },
  {
    id:2,
  name:"Mango Boy",
    follow:true,
    rating:4.9,
    brands:[
      {
        id:1,
        name:"Abcd Efgh",
        image:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price:79.99,
        like:false
      },
      {
        id:2,
        name:"Abcd Efgh",
        image:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price:79.99,
        like:true
      },
      {
        id:3,
        name:"Abcd Efgh",
        image:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price:79.99,
        like:false
      },
      {
        id:4,
        name:"Abcd Efgh",
        image:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price:79.99,
        like:true
      }
    ]
  },
  {
    id:3,
  name:"Mango Boy",
    follow:true,
    rating:4.9,
    brands:[
      {
        id:1,
        name:"Abcd Efgh",
        image:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price:79.99,
        like:false
      },
      {
        id:2,
        name:"Abcd Efgh",
        image:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price:79.99,
        like:true
      },
      {
        id:3,
        name:"Abcd Efgh",
        image:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price:79.99,
        like:true
      },
      {
        id:4,
        name:"Abcd Efgh",
        image:"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price:79.99,
        like:false
      }
    ]
  }
]



const HomeScreen = ({ navigation, route }) => {
    const [modal,isModal]=useState();
    const [user,updateUser]=useState();
    const placesHandler=()=>{

      //  navigation.navigate('MainTabs')
      isModal(true);
    }

    // useEffect(()=>{
      
    // },[route])
    console.log(route)
    let modalScreen
    const toggleModal=()=>{
      if(modal)isModal(false);
      else if(!modal)isModal(true);
    }
    if(modal){

      modalScreen=(
        <Modal
            isVisible={modal}
            style={{backgroundColor: 'white',marginTop:"20%",marginBottom:"20%",margin:"10%"}}>
            <View style={{height:"80%"}}>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 10,
              }}>
              Complete Your Profile
            </Text>
            {/* <Image
              style={{
                paddingVertical: 30,
                width: 150,
                height: 150,
                borderRadius: 75,
                marginLeft: 120,
                marginBottom: 5,
              }}
              resizeMode="cover"
              source={require('../../assets/uploadimg.png')}
            /> */}
            <Icon
              name='menu'
              size={30}
            />
            <View style={{}}>
              <Text
                style={{
                  color: '#46D5D8',
                  textAlign: 'center',
                  paddingBottom: 15,
                }}>
                Upload a profile picture
              </Text>
            </View>
            <Text style={{paddingLeft: '6%', color: 'grey'}}>
              {' '}
               Dress Size                                     Shoe Size
            </Text>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={styles.social}>
                <TouchableOpacity>
                  <Picker
                    style={styles.picker}
                    selectedValue={user}
                    onValueChange={updateUser}>
                    <Picker.Item label="Select" value="steve" />
                    <Picker.Item label="Ellen" value="ellen" />
                    <Picker.Item label="Maria" value="maria" />
                  </Picker>
                </TouchableOpacity>
              </View>

              <View style={styles.social}>
                <TouchableOpacity>
                  <Picker
                    style={styles.picker}
                    selectedValue={user}
                    onValueChange={()=>updateUser(user)}>
                    <Picker.Item label="Select" value="steve" />
                    <Picker.Item label="Ellen" value="ellen" />
                    <Picker.Item label="Maria" value="maria" />
                  </Picker>
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                paddingLeft: '6%',
                color: 'grey',
                paddingTop: 25,
                paddingBottom: 5,
              }}>
              {' '}
              Height
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: '0%',
                width: '100%',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
              }}>
              <View style={styles.social}>
                <TouchableOpacity>
                  <Picker
                    style={styles.picker}
                    selectedValue={user}
                    onValueChange={updateUser}>
                    <Picker.Item label="Select" value="steve" />
                    <Picker.Item label="Ellen" value="ellen" />
                    <Picker.Item label="Maria" value="maria" />
                  </Picker>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.ModalButton}>
              <TouchableOpacity>
                <FlatButton
                  text="SAVE"
                  color="#46D5D8"
                  onPress={toggleModal}
                />
              </TouchableOpacity>
            </View>
            <Text onPress={toggleModal} style={{textAlign: 'center', color: 'grey'}}>
              Set Up Later
            </Text>
            </View>
            
          </Modal>
      )
    }


    return (

        <ScrollView contentContainerStyle={styles.container}>
            {lenders.map((lender)=>{
                return <LenderScreen 
                              key={lender.id} 
                              name={lender.name}
                              follow={lender.follow}
                              rating={lender.rating}
                              brands={lender.brands}
                              />
            })}
        </ScrollView>
    );
};
HomeScreen.options = {
  
    topBar: {
      title: {
        text: 'Home',
        color: 'white',
     
      },
      
      background: {
        color: '#1976D2'
      }
    }
  }
const styles=StyleSheet.create({
    container:{
        
        backgroundColor:"whitesmoke",
        alignItems:"center",
        justifyContent:"center"
    },
    Modal: {
      flex: 1,
      backgroundColor: 'white',
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    FlatButtonStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    social: {
      width: '40%',
      marginRight: '5%',
      marginLeft: '5%',
      borderWidth: 0.5,
      borderColor: 'grey',
      borderRadius: 3,
    },
    picker: {
      color: 'grey',
    },
    buttons: {
      width: '100%',
    },
  
    icon: {
      alignItems: 'flex-end',
      padding: 10,
    }
})

export default HomeScreen;