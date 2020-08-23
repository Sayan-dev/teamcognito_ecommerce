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
import {darkbg, mediumgrey, lightgrey} from '../../styles/global';
import CalendarPicker from 'react-native-calendar-picker';

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
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }

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
    const {selectedStartDate, selectedEndDate} = this.state;
    const minDate = new Date(); // Today
    const maxDate = new Date(2017, 6, 3);
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.Modal}>
          <Button title="Show modal" onPress={this.toggleModal} />
          <Modal
            isVisible={this.state.isModalVisible}
            style={{backgroundColor: 'white'}}>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 20,
                marginBottom: 20,
                marginTop: 10,
                color: darkbg,
              }}>
              Title Title Title Titl ...
            </Text>
            <View style={{borderBottomWidth: 0.6, borderColor: darkbg}}></View>
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
            <View style={{width: '90%'}}>
              <Text
                style={{
                  color: mediumgrey,
                  textAlign: 'center',
                  paddingBottom: 15,
                  paddingTop: 15,
                  paddingLeft: '8%',
                }}>
                Please select the date when you want the item availlable or
                temporary Unavaillable
              </Text>
              <View
                style={{
                  width: '96%',
                  borderBottomWidth: 0.6,
                  marginLeft: '7%',
                  borderBottomColor: mediumgrey,
                }}></View>
              <Text style={{color: 'red', marginLeft: '74%'}}>Date Booked</Text>
              <Text style={{color: lightgrey, marginLeft: '35%'}}>
                Not Availlable / Date has passed
              </Text>

              <View
                style={{
                  width: '58%',
                  borderBottomWidth: 0.6,
                  marginLeft: '38%',
                  borderBottomColor: mediumgrey,
                }}></View>
            </View>
            <View style={styles.container}>
              <CalendarPicker
                startFromMonday={true}
                allowRangeSelection={true}
                minDate={minDate}
                maxDate={maxDate}
                todayBackgroundColor="#f2e6ff"
                selectedDayColor="#7300e6"
                selectedDayTextColor="#FFFFFF"
                selectedDayColor="#33ABB3"
                previousTitle="     <"
                nextTitle=">     "
                onDateChange={this.onDateChange}
                height="400"
              />
            </View>
            <View
              style={{
                width: '92%',
                borderBottomWidth: 0.6,
                marginLeft: '4%',
                borderBottomColor: mediumgrey,
              }}></View>

            <View style={styles.ModalBotton}>
              <TouchableOpacity
                style={{width: '96%', paddingLeft: '4%', marginBottom: 150}}>
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
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
  Modal: {
    flex: 1,
    backgroundColor: 'white',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  ModalButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
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
