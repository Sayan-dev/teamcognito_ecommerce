import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Picker,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import {DeleteButton} from '../../shared/button';
import {FlatButton} from '../../shared/button';

import AsyncStorage from '@react-native-community/async-storage';
import {Icon} from 'react-native-elements';
import { darkbg, mediumgrey, lightgrey } from '../../styles/global';

export default class ProfileScreen7 extends Component {
  profileHandler = async () => {
    // const value = 'Mango Tune';
    // try {
    //   await AsyncStorage.setItem('token', value);
    // } catch (e) {
    //   // save error
    //   navigation.navigate('LoginFail');
    // }

    // console.log('Done.');
    navigation.navigate('LoginFail');
    // register(false);
    //  navigation.navigate('Home');
  };

  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  state = {user: ''};
  updateUser = (user) => {
    this.setState({user: user});
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.icon}>
          <Icon
            name="close"
            size={50}
            onPress={() => {
              navigation.navigate('Home');
            }}
            // style={styles.icon}
          />
        </View>

        <View style={styles.Modal}>
          <Button title="Show modal" onPress={this.toggleModal} />
          <Modal
            isVisible={this.state.isModalVisible}
            style={{backgroundColor: 'white'}}>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 20,
                color: darkbg,
               

              }}>
              Title Title Title Titl ...
            </Text>
            <View style={{borderBottomWidth:0.6, borderColor:darkbg}}></View>
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
            <View style={{width:"90%"}}>
              <Text
                style={{
                  color: mediumgrey,
                  textAlign: 'center',
                  paddingBottom: 15,
                  paddingTop:15,
                  paddingLeft:"8%",
               
                }}>
                Please select the date when you want the item availlable or temporary Unavaillable
              </Text>
              <View style={{width:"96%", borderBottomWidth:0.6, marginLeft:"7%", borderBottomColor:mediumgrey}}></View>
              <Text style={{color:"red", marginLeft:"77%"}}>Date Booked</Text>
              <Text style={{color:lightgrey, marginLeft:"41.5%"}}>Not Availlable / Date has passed</Text>
              
              <View style={{width:"58%", borderBottomWidth:0.6, marginLeft:"42%", borderBottomColor:mediumgrey}}></View>
              
            </View>
            
           

            <View style={styles.ModalBotton}>
              <TouchableOpacity style={{width:"90%",paddingLeft:"10%"}}>
                <DeleteButton
                  text="Mark as Unavaillable"
                  color="#46D5D8"
                  onPress={this.toggleModal}
                />
              </TouchableOpacity>
            </View>
            
          </Modal>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Modal: {
    flex: 1,
    backgroundColor: 'white',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:"80%"
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
  },

  icon: {
    alignItems: 'flex-end',
    padding: 10,
  },
});
