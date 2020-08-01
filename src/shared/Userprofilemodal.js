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
import {ModalButton} from './button';
import {FlatButton} from './button';
import AsyncStorage from '@react-native-community/async-storage';
import {Icon} from 'react-native-elements';

export default class UserProfileSetFlat extends Component {
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
              style={{
                paddingVertical: 30,
                width: 150,
                height: 150,
                borderRadius: 75,
                marginLeft: 120,
                marginBottom: 5,
              }}
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
                    selectedValue={this.state.user}
                    onValueChange={this.updateUser}>
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
                    selectedValue={this.state.user}
                    onValueChange={this.updateUser}>
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
                    selectedValue={this.state.user}
                    onValueChange={this.updateUser}>
                    <Picker.Item label="Select" value="steve" />
                    <Picker.Item label="Ellen" value="ellen" />
                    <Picker.Item label="Maria" value="maria" />
                  </Picker>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.ModalBotton}>
              <TouchableOpacity>
                <ModalButton
                  text="SAVE"
                  color="#46D5D8"
                  onPress={this.toggleModal}
                />
              </TouchableOpacity>
            </View>
            <Text style={{textAlign: 'center', color: 'grey'}}>
              Set Up Later
            </Text>
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
