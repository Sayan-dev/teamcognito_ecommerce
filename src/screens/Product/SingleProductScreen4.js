import React, {Component} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import {
  darkbg,
  lightgrey,
  mediumgrey,
  darkgrey,
  lightbg,
} from '../../styles/global';
import {Icon} from 'react-native-elements';
import {FlatButton} from '../../shared/button';

export default class SingleProductScreen4 extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View>
            <Image
              style={{
                paddingVertical: 30,
                width: 110,
                height: 200,

                marginLeft: 20,
                marginBottom: 20,
                marginTop: 20,
              }}
              resizeMode="cover"
              source={{uri: 'https://source.unsplash.com/1024x768/?nature'}}
            />
            <View style={{position: 'absolute', bottom: '13%', right: '5%'}}>
              <Icon name="favorite-border" size={25} color="white" />
            </View>
          </View>
          <View style={styles.container}>
            <Text style={{color: lightgrey}}>
              BY <Text style={{fontSize: 18, color: 'black'}}>BRAND BRAND</Text>
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                position: 'absolute',
                top: '12%',
              }}>
              <Text style={{color: lightgrey, marginTop: '2%'}}>
                SIZE <Text style={{fontSize: 18, color: 'black'}}>6</Text>
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                position: 'absolute',
                top: '30%',
              }}>
              <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={{textDecorationLine: 'underline'}}>
                    Rental Date
                  </Text>
                  <View style={{position: 'absolute', left: '170%'}}>
                    <Icon name="Right" size={25} color="grey" />
                  </View>
                </View>

                <Text>01 Jun - 10 Jun</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                position: 'absolute',
                top: '58%',
              }}>
              <View style={{flex: 1}}>
                <Text style={{textDecorationLine: 'underline'}}>Status</Text>
                <Text style={{color: darkbg}}>Request for approval</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
              borderBottomWidth: 1,
              borderBottomColor: darkgrey,
              marginBottom: '5%',
            }}></View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View>
            <Image
              style={{
                paddingVertical: 30,
                width: 110,
                height: 200,

                marginLeft: 20,
                marginBottom: 20,
                marginTop: 20,
              }}
              resizeMode="cover"
              source={{uri: 'https://source.unsplash.com/1024x768/?nature'}}
            />
            <View style={{position: 'absolute', bottom: '13%', right: '5%'}}>
              <Icon name="favorite-border" size={25} color="white" />
            </View>
          </View>
          <View style={styles.container}>
            <Text style={{color: lightgrey}}>
              BY <Text style={{fontSize: 18, color: 'black'}}>BRAND BRAND</Text>
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                position: 'absolute',
                top: '12%',
              }}>
              <Text style={{color: lightgrey, marginTop: '2%'}}>
                SIZE <Text style={{fontSize: 18, color: 'black'}}>6</Text>
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                position: 'absolute',
                top: '30%',
              }}>
              <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={{textDecorationLine: 'underline'}}>
                    Rental Date
                  </Text>
                  <View style={{position: 'absolute', left: '170%'}}>
                    <Icon name="Right" size={25} color="grey" />
                  </View>
                </View>

                <Text>01 Jun - 10 Jun</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                position: 'absolute',
                top: '58%',
              }}>
              <View style={{flex: 1}}>
                <Text style={{textDecorationLine: 'underline'}}>Status</Text>
                <Text style={{color: darkbg}}>Request for approval</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
              borderBottomWidth: 1,
              borderBottomColor: darkgrey,
              marginBottom: '5%',
            }}></View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View>
            <Image
              style={{
                paddingVertical: 30,
                width: 110,
                height: 200,

                marginLeft: 20,
                marginBottom: 20,
                marginTop: 20,
              }}
              resizeMode="cover"
              source={{uri: 'https://source.unsplash.com/1024x768/?nature'}}
            />
            <View style={{position: 'absolute', bottom: '13%', right: '5%'}}>
              <Icon name="favorite-border" size={25} color="white" />
            </View>
          </View>
          <View style={styles.container}>
            <Text style={{color: lightgrey}}>
              BY <Text style={{fontSize: 18, color: 'black'}}>BRAND BRAND</Text>
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                position: 'absolute',
                top: '12%',
              }}>
              <Text style={{color: lightgrey, marginTop: '2%'}}>
                SIZE <Text style={{fontSize: 18, color: 'black'}}>6</Text>
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                position: 'absolute',
                top: '30%',
              }}>
              <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={{textDecorationLine: 'underline'}}>
                    Rental Date
                  </Text>
                  <View style={{position: 'absolute', left: '170%'}}>
                    <Icon name="Right" size={25} color="grey" />
                  </View>
                </View>

                <Text>01 Jun - 10 Jun</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                position: 'absolute',
                top: '58%',
              }}>
              <View style={{flex: 1}}>
                <Text style={{textDecorationLine: 'underline'}}>Status</Text>
                <Text style={{color: darkbg}}>Request for approval</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
              borderBottomWidth: 1,
              borderBottomColor: darkgrey,
              marginBottom: '5%',
            }}></View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View>
            <Image
              style={{
                paddingVertical: 30,
                width: 110,
                height: 200,

                marginLeft: 20,
                marginBottom: 20,
                marginTop: 20,
              }}
              resizeMode="cover"
              source={{uri: 'https://source.unsplash.com/1024x768/?nature'}}
            />
            <View style={{position: 'absolute', bottom: '13%', right: '5%'}}>
              <Icon name="favorite-border" size={25} color="white" />
            </View>
          </View>
          <View style={styles.container}>
            <Text style={{color: lightgrey}}>
              BY <Text style={{fontSize: 18, color: 'black'}}>BRAND BRAND</Text>
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                position: 'absolute',
                top: '12%',
              }}>
              <Text style={{color: lightgrey, marginTop: '2%'}}>
                SIZE <Text style={{fontSize: 18, color: 'black'}}>6</Text>
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                position: 'absolute',
                top: '30%',
              }}>
              <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={{textDecorationLine: 'underline'}}>
                    Rental Date
                  </Text>
                  <View style={{position: 'absolute', left: '170%'}}>
                    <Icon name="Right" size={25} color="grey" />
                  </View>
                </View>

                <Text>01 Jun - 10 Jun</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                position: 'absolute',
                top: '58%',
              }}>
              <View style={{flex: 1}}>
                <Text style={{textDecorationLine: 'underline'}}>Status</Text>
                <Text style={{color: darkbg}}>Request for approval</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
              borderBottomWidth: 1,
              borderBottomColor: darkgrey,
              marginBottom: '5%',
            }}></View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    marginLeft: '5%',
    marginRight: '5%',
  },
});
