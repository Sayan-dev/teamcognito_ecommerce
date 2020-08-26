import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
  ImageBackground,
  Picker,
} from 'react-native';

import {FlatButton} from '../../shared/button';
import {SmallButton} from '../../shared/button';
import {HollowButton} from '../../shared/button';
import {ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {
  globalStyles,
  darkbg,
  mediumgrey,
  darkgrey,
  lightgrey,
} from '../../styles/global';

export default class SingleProductScreen2A extends Component {
  state = {user: ''};
  updateUser = (user) => {
    this.setState({user: user});
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{marginTop: 10, marginBottom: 10}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                color: darkbg,
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}>
              Request Form
            </Text>
          </View>

          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: darkbg,
              width: '100%',
            }}></View>
          <View style={{position: 'absolute', top: '5%', right: '1%'}}>
            <Icon name="close" size={40} color="grey" />
          </View>
          <Text style={{textAlign: 'center'}}></Text>
        </View>
        <View style={{marginLeft: '3%'}}>
          <Text>
            By placing your order,you agree to Logo{' '}
            <Text style={{color: darkbg}}>Terms and Services</Text> and{' '}
            <Text style={{color: darkbg}}>Privacy Notice</Text>
          </Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity>
            <FlatButton
              text="Request Now"
              onPress={() =>
                this.props.navigation.navigate('SingleProductScreen2A')
              }></FlatButton>
          </TouchableOpacity>
        </View>
        <View style={styles.marginBottomStyle}></View>
        <Text style={{fontWeight: 'bold', marginLeft: 15, marginBottom: 5}}>
          Payment Information
        </Text>
        <View
          style={{
            marginLeft: 15,
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
            width: '31%',
            marginBottom: 15,
          }}></View>
        <View style={styles.containerText}>
          <Text style={{color: lightgrey}}>Rental Fee</Text>
          <Text
            style={{
              color: lightgrey,
              position: 'absolute',
              paddingLeft: '85%',
            }}>
            $79.95
          </Text>
          <Text style={{color: lightgrey}}>Shipping Fee</Text>
          <Text
            style={{
              color: lightgrey,
              position: 'absolute',
              top: '25%',
              paddingLeft: '85%',
            }}>
            $15.95
          </Text>
          <Text style={{color: lightgrey}}>Promotional Codes ( 10OFF )</Text>
          <Text
            style={{
              color: lightgrey,
              position: 'absolute',
              paddingLeft: '84%',
              top: '50%',
            }}>
            -$15.00
          </Text>
          <Text style={{fontWeight: 'bold'}}>Total Order</Text>
          <Text
            style={{
              fontWeight: 'bold',
              position: 'absolute',
              paddingLeft: '85%',
              top: '75%',
            }}>
            $80.90
          </Text>
        </View>
        <View style={styles.marginBottomStyle}></View>
        <Text style={{fontWeight: 'bold', marginLeft: 15, marginBottom: 5}}>
          Shipping Information
        </Text>
        <View
          style={{
            marginLeft: 15,
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
            width: '31%',
            marginBottom: 15,
          }}></View>
        <Text style={{color: lightgrey, paddingLeft: '8%'}}>Delivery Via</Text>
        <View style={styles.social}>
          <TouchableOpacity>
            <Picker
              style={styles.picker}
              selectedValue={this.state.user}
              onValueChange={this.updateUser}>
              <Picker.Item label="Express Post Bag (+ $15.95)" value="steve" />
              <Picker.Item label="Ellen" value="ellen" />
              <Picker.Item label="Maria" value="maria" />
            </Picker>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{color: lightgrey, paddingLeft: '8%'}}>
            Shipping Address
          </Text>
          <Text style={{color: darkbg, paddingLeft: '35%'}}>
            Add a new address
          </Text>
        </View>

        <View style={styles.social}>
          <TouchableOpacity>
            <Picker
              style={styles.picker}
              selectedValue={this.state.user}
              onValueChange={this.updateUser}>
              <Picker.Item label="Express Post Bag (+ $15.95)" value="steve" />
              <Picker.Item label="Ellen" value="ellen" />
              <Picker.Item label="Maria" value="maria" />
            </Picker>
          </TouchableOpacity>
        </View>
        <View style={styles.marginBottomStyle}></View>
        <Text style={{fontWeight: 'bold', marginLeft: 15, marginBottom: 5}}>
          Payment Method
        </Text>
        <View
          style={{
            marginLeft: 15,
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
            width: '25%',
            marginBottom: 15,
          }}></View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.cardBox}>
            <Text style={{marginTop: '1%', marginLeft: '5%'}}>
              Mastercard **** 3241{' '}
              <Text style={{color: lightgrey, fontSize: 32}}> ></Text>
            </Text>
            {/* keyboard_arrow_right */}

            <Text
              style={{color: darkgrey, marginLeft: '5%', marginBottom: '5%'}}>
              Expires 04/2023
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: lightgrey,
                marginBottom: '5%',
              }}></View>

            <TextInput
              style={styles.TextInput}
              value="Gift Cards and Promotional Podes"
            />
            <View style={styles.miniButton}>
              <TouchableOpacity>
                <SmallButton
                  text="Apply"
                  onPress={() =>
                    this.props.navigation.navigate('SingleProductScreen3')
                  }></SmallButton>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.marginBottomStyle}></View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'row',
          }}>
          <Icon
            name="account-circle"
            style={styles.headerIcon}
            size={50}
            color="grey"
          />
          <View style={{flexDirection: 'column'}}>
            <Text style={{color: lightgrey, marginLeft: 2}}>
              BY <Text style={{fontSize: 17, color: 'black'}}>BRAND BRAND</Text>
            </Text>

            <Text style={{color: lightgrey, marginLeft: 2}}>
              SIZE <Text style={{fontSize: 17, color: 'black'}}>6</Text>
            </Text>
          </View>
          <Icon
            name="message"
            style={styles.headerIcon2}
            size={35}
            color="grey"
          />
        </View>
        <View style={styles.HollowButton}>
          <TouchableOpacity>
            <HollowButton
              text="See Details"
              onPress={() =>
                this.props.navigation.navigate('SingleProductScreen3')
              }></HollowButton>
          </TouchableOpacity>
        </View>
        <View style={styles.marginBottomStyle2}></View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{paddingTop: 30, paddingLeft: 25, color: mediumgrey}}>
            Rental Period
          </Text>
          <Text style={{paddingTop: 30, paddingLeft: 140, color: mediumgrey}}>
            Rental Period
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',

            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.social1}>
            <TouchableOpacity>
              <Picker
                style={styles.picker}
                selectedValue={this.state.user}
                onValueChange={this.updateUser}>
                <Picker.Item label="4 days for $75.95" value="steve" />
                <Picker.Item label="Ellen" value="ellen" />
                <Picker.Item label="Maria" value="maria" />
              </Picker>
            </TouchableOpacity>
          </View>

          <View style={styles.social1}>
            <TouchableOpacity>
              <Picker
                style={styles.picker}
                selectedValue={this.state.user}
                onValueChange={this.updateUser}>
                <Picker.Item label="  01 Aug" value="steve" />
                <Picker.Item label="Ellen" value="ellen" />
                <Picker.Item label="Maria" value="maria" />
              </Picker>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <FlatButton
              text="Request Now"
              onPress={() =>
                this.props.navigation.navigate('SingleProductScreen4')
              }></FlatButton>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headerIcon: {
    marginLeft: 15,
  },
  headerIcon2: {
    marginLeft: '50%',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttons: {
    width: '94%',
    marginLeft: '3%',
    marginRight: '3%',
  },
  social: {
    width: '94%',
    marginRight: '3%',
    marginLeft: '3%',
    marginBottom: '5%',
    borderWidth: 1,
    borderColor: lightgrey,
    borderRadius: 5,
  },
  social1: {
    width: '43%',
    marginRight: '4%',
    marginLeft: '4%',
    borderWidth: 0.8,
    borderColor: 'grey',
    borderRadius: 5,
  },
  miniButton: {
    position: 'absolute',
    width: '10%',
    marginLeft: '78%',
    marginRight: '3%',
    marginBottom: '5%',
    top: '58%',
  },
  HollowButton: {
    width: '95%',
    marginLeft: '3%',
    marginRight: '3%',
    marginBottom: '5%',
  },

  cardBox: {
    width: '93%',
    borderWidth: 2,
    borderColor: lightgrey,
    borderRadius: 10,
    marginBottom: '5%',
  },
  TextInput: {
    width: '70%',
    height: '22%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
    marginLeft: 15,
    color: lightgrey,
    paddingLeft: 20,
  },
  containerText: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: '4%',
    marginBottom: 15,
  },
  marginBottomStyle: {
    marginLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    width: '93%',
    marginBottom: 10,
  },
  marginBottomStyle2: {
    marginLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    width: '93%',
    marginBottom: 10,
  },
});
