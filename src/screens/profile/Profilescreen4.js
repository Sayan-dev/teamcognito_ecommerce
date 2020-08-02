import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Picker
} from 'react-native';
import {FlatButton} from '../../shared/button';
import {HollowButton} from '../../shared/button';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import {Icon} from 'react-native-elements';

export default class ProfileScreen4 extends Component {
    profileHandler = async () => {
      const value = 'Mango Tune';
      try {
        await AsyncStorage.setItem('token', value);
      } catch (e) {
        // save error
        navigation.navigate('LoginFail');
      }
  
      console.log('Done.');
      navigation.navigate('LoginFail');
      register(false);
      //  navigation.navigate('Home');
    };
    state = {user: ''};
    updateUser = (user) => {
      this.setState({user: user});
    };
  
    render() {  
  return (
      <ScrollView contentContainerStyle={styles.container}>
    <SafeAreaView>
    <View >
      <View style={styles.header}>
          <View style={{width:"100%",height:"100%", justifyContent:"center", marginLeft:20}}>
          <Text style={{textDecorationLine:"underline", fontWeight:"bold",color:"white"}}>Edit Profile</Text>
          </View>
        
            
        
      </View>

      <View style={styles.subContainer}>
      <Icon
            name="menu"
            size={100}
            onPress={() => {
              navigation.navigate('Home');
            }}
            // style={styles.icon}
          />
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 20,
                color:'#46D5D8',
                borderBottomWidth:0.5,
                borderBottomcolor:'#46D5D8',
              }}>
              Upload a profile picture
            </Text>
        <Text style={styles.textInput}>Full Name                                                                                 </Text>
        <TextInput style={styles.input} />
        <Text style={styles.textInput}>Screen Name                                                                             </Text>
        <TextInput style={styles.input} />
        <Text style={styles.textInput}>Bio                                                                                             </Text>
        
        <TextInput style={styles.input1} />
            
        <Text style={{paddingRight: '15%', color: 'grey'}}>
              {' '}Dress Size                                      Shoe Size
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
              Height                                                                                       </Text>
            <View
              style={{
                flexDirection: 'row',
                marginRight: '5%',
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
        <View style={styles.buttons}>
          <TouchableOpacity>
            <FlatButton
              onPress={()=>this.props.navigation.navigate('LoginProfile-5')}
              text="SAVE"
              color="#46D5D8"></FlatButton>
          </TouchableOpacity>
        </View>


        
        
      </View>
    </View>
    </SafeAreaView>
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
    alignItems: 'center',
    textAlign: 'left',
    backgroundColor:"#fff"
  },
  subContainer: {
    alignItems: 'center',
    width: '90%',
    margin: 20,
  },
  buttons: {
    width: '100%',
    
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
  input1: {
    width: '100%',
    height:"15%",
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
  },
  
  textInput: {
    padding: 8,
    color: 'grey',

  },
  social: {
    width: '46%',
    marginRight: '3%',
    marginLeft: '3%',
    borderWidth: 0.8,
    borderColor: 'grey',
    borderRadius: 5,
  },
  picker: {
    color: 'grey',
  },
  
   textInput1: {
    padding: 10,
    color: '#46D5D8',
  },
  
  header: {
    backgroundColor: '#46D5D8',
    width: '100%',
    height: '6%',
    flexDirection: 'column',
  },
  icon: {
    alignItems: 'flex-end',
    padding:10,
    
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#333',
    letterSpacing: 1,
    paddingTop: 0,
  },
  
});
