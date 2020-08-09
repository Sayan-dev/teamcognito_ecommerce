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
import {globalStyles, darkbg} from '../../styles/global';
import {FlatButton} from '../../shared/button';
import {HollowButton} from '../../shared/button';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import {Icon} from 'react-native-elements';

export default class ProfileScreen5 extends Component {
    profileHandler = async () => {
      // const value = 'Mango Tune';
      // try {
      //   await AsyncStorage.setItem('token', value);
      // } catch (e) {
      //   // save error
      //   navigation.navigate('LoginFail');
      // }
  
      // console.log('Done.');
      navigation.navigate('Home');
      // register(false);
      //  navigation.navigate('Home');
    };
    state = {user: ''};
    updateUser = (user) => {
      this.setState({user: user});
    };
  
    render() {  
  return (
      <ScrollView style={{backgroundColor:"white"}}>
    <SafeAreaView>
    <View style={styles.container}>
    {/* <View style={styles.icon}>
          <Icon
            name="menu"
            size={50}
            onPress={() => {
              navigation.navigate('Home');
            }}
            // style={styles.icon}
          />
        </View> */}
      <View style={{borderBottomWidth:0.8, marginTop:10 ,borderBottomColor:darkbg, width:"100%"}}>
      <Text style={{fontWeight:"bold", fontSize:18, marginTop:0,textAlign:"center", color:darkbg, paddingBottom:15}}>Closet</Text>
      </View>
      
      <Text style={{textDecorationLine:"underline", paddingLeft:20,marginTop:10, width:"100%"}}>Add New Item</Text> 
        
      </View>
        

      <View style={styles.subContainer}>
        <View style={{flex:1,flexDirection:"row"}}>
      <Image
              style={{
                paddingVertical: 30,
                width: 120,
                height: 120,
                borderRadius: 75,
                // marginLeft: 10,
                marginBottom: 5,
              }}
              resizeMode="cover"
              source={require('../../assets/squareimg.png')}
            />
            <Image
              style={{
                paddingVertical: 30,
                width: 120,
                height: 120,
                borderRadius: 75,
                // marginLeft: 10,
                marginBottom: 5,
              }}
              resizeMode="cover"
              source={require('../../assets/squareimg.png')}
            />
            <Image
              style={{
                paddingVertical: 30,
                width: 120,
                height: 120,
                borderRadius: 75,
                // marginLeft: 10,
                marginBottom: 5,
              }}
              resizeMode="cover"
              source={require('../../assets/squareimg.png')}
            />
        </View>  
        <Text style={globalStyles.lightTitleText}>Title</Text>
        <TextInput style={globalStyles.input} />
        <Text style={styles.textInput2}>Rental Price</Text>
        
        <Text style={styles.textInput3}>( Per 4 days )              (Per 10 days)              (Per 20 days)</Text>

        <View style={{flex:1, flexDirection:"row", justifyContent:"space-between", alignItems:"space-between",}}>
        
              <TextInput value="$" style={styles.input2}/>
              <TextInput value="$" style={styles.input2}/>
              <TextInput value="$" style={styles.input2}/>

        </View>
        <Text style={{width:"100%", color:"grey", paddingLeft:20,paddingTop:10}}>Bond Money                                   Retail Price</Text>
        <View style={{flex:1, flexDirection:"row", justifyContent:"space-between", alignItems:"space-between",}}>
        
              <TextInput value="$" style={styles.input3}/>
              <TextInput value="$" style={styles.input3}/>
              

        </View>
        
        
            
        <Text style={{width:"100%", color: 'grey', marginLeft:30, paddingTop:28}}>
              {' '}Category                                          Style
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
                    <Picker.Item label="" value="steve" />
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
                    <Picker.Item label="" value="steve" />
                    <Picker.Item label="Ellen" value="ellen" />
                    <Picker.Item label="Maria" value="maria" />
                  </Picker>
                </TouchableOpacity>
              </View>
            </View>    
        <Text style={{width:"100%", color: 'grey',marginLeft:30, paddingTop:28}}>
              {' '}Brand                                                Size
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
                    <Picker.Item label="" value="steve" />
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
                    <Picker.Item label="" value="steve" />
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
                    <Picker.Item label="" value="steve" />
                    <Picker.Item label="Ellen" value="ellen" />
                    <Picker.Item label="Maria" value="maria" />
                  </Picker>
                </TouchableOpacity>
              </View>
              <Text
              style={{
                paddingLeft: '6%',
                color: 'grey',
                marginBottom:10,
                paddingBottom: 20,
              }}>
              {' '}
              Colour                                                                                       </Text>
            </View>
            
        <View style={styles.buttons}>
          <TouchableOpacity style={{marginBottom:10 }}>
            <FlatButton
              onPress={()=>this.props.navigation.replace('LoginProfile-6')}
              text="SAVE"
              ></FlatButton>
          </TouchableOpacity>
        </View>


        
        
      </View>
   
    </SafeAreaView>
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'left',
    backgroundColor:"#fff",
    height: "10%",
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
    marginBottom: 25,
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
  input2: {
    width:"30%",
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 5,
    // marginBottom: 20,
    margin: 9
  },
  input3: {
    width:"48%",
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 5,
    // marginBottom: 20,
    margin: 5
  },
  
  textInput: {
    paddingLeft: 21,
    paddingBottom: 10,
    color: 'grey',
    width:"100%"

  },
  textInput2: {
    paddingLeft: 20,
    
    color: 'grey',
    width:"100%"

  },
  textInput3: {
    paddingLeft: 20,
    
    color: '#CCD1D1',
    width:"100%"

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
  icon: {
    alignItems: 'flex-start',
    padding:5,
    width:"100%",
    height:"30%"
    
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#333',
    letterSpacing: 1,
    paddingTop: 0,
  },
  
});
