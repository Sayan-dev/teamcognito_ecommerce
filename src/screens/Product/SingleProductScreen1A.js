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
  Picker
} from 'react-native';
import Lender from '../Home/Lenders/Lender/Lender';
import { SliderBox } from "react-native-image-slider-box";
import {FlatButton} from '../../shared/button';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import {Icon} from 'react-native-elements';
import {globalStyles, darkbg, mediumgrey, darkgrey} from '../../styles/global';

export default class SingleProductScreen1A  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        // "https://source.unsplash.com/1024x768/?tree",
        // require('./assets/images/girl.jpg'),
      ],
      width: 250
    };
  }
  
  render() {
    return (
      <ScrollView>
      <View  style={styles.container}>
      <View style={{marginTop:10, marginBottom:10}}>
        <Text style={{textAlign:'center'}}>Title Title Title Title Title Title Title Title Title Title Title Title </Text>
        <Text style={{textAlign:'center'}}>Content Content Content Content Content Content Content</Text>

      </View>
      <View style={styles.container}>
        
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={420}

          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
            
          }
          dotStyle={{
            marginTop:400
          }}
          
          parentWidth={this.state.width}
        />
        
      </View>
      <View style={{marginTop:30, borderBottomWidth:0.6,borderBottomColor:"grey",width:"95%"}}></View>
      

      </View>
      <View style={{flex: 1, flexDirection: "row"}}>
      <Text style={{paddingTop: 30, paddingLeft: 25, color: mediumgrey}}>Rental Period</Text>
      <Text style={{paddingTop: 30, paddingLeft: 140, color: mediumgrey}}>Rental Period</Text>
      
      </View>
      <View
              style={{
                flexDirection: 'row',
                
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={styles.social}>
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

              <View style={styles.social}>
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
              onPress={()=>this.props.navigation.navigate('SingleProductScreen2A')}
              
              ></FlatButton>
          </TouchableOpacity>
        </View>      
      
        <View style={{marginLeft:10, borderBottomWidth:0.6,borderBottomColor:"grey",width:"95%", marginBottom:10}}></View>
        <View style={styles.heading}>
        <Icon name="account-circle" style={styles.headerIcon} size={50} color="grey"/>
        <View style={{flexDirection: 'column'}}>
        <Text style={{paddingHorizontal: '4%'}}>
            screen.name
            <View style={{flexDirection: 'row'}}>
            <Icon
              name="star"
              style={{ paddingHorizontal: 2}}
              size={15}
              color="gold"
            />
            <Text style={{color:"grey"}}>5.0 .</Text>
          </View>
            <Text style={{color:darkbg}}> Follow</Text>
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="place"
              style={{...styles.headerIcon, paddingHorizontal: 2}}
              size={15}
            />
            <Text style={{color:"grey"}}>Melbourne, Victoria</Text>
            <View style={{justifyContent:"center"}}>
          <Icon name="message" style={{paddingLeft: 150, marginBottom:25}} size={30} color="grey"/>
        </View>

          </View>


        </View>
        </View>
       
            
            <View style={{marginLeft:15, borderBottomWidth:0.6,borderBottomColor:"grey",width:"93%"}}></View>
      <Text style={{fontWeight:"bold", width:"90%", marginTop:10, marginLeft:20}}>About this piece                                                                                 </Text>
      <View style={{marginTop:5, borderBottomWidth:0.6,borderBottomColor:"grey",width:"24.5%", marginRight:"78%", marginLeft:"4.5%"}}></View>
      
      <View
              style={{
                flexDirection: 'row',
                paddingTop: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                
              <View style={styles.social2}>
                <Text style={globalStyles.lightTitleText}>Category</Text>
                
              </View>
              
              <View style={styles.social2}>
              <Text style={globalStyles.lightTitleText}>Style</Text>
                
              </View>
              
              
              
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <View style={styles.socialtext}>
                
                <Text>           Two Tier                                      </Text>
                </View>
                <View style={styles.socialtext}>
                                
                                <Text>Classic                                          </Text>
                                </View>
                                </View>
      <View
              style={{
                flexDirection: 'row',
                paddingTop: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                
              <View style={styles.social2}>
                <Text style={globalStyles.lightTitleText}>Brand</Text>
                
              </View>
              
              <View style={styles.social2}>
              <Text style={globalStyles.lightTitleText}>Size</Text>
                
              </View>
              
              
              
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <View style={styles.socialtext}>
                
                <Text>      Luxury                                          </Text>
                </View>
                <View style={styles.socialtext}>
                                
                                <Text>  6                                          </Text>
                                </View>
                                </View>
                     <View
              style={{
                flexDirection: 'row',
                paddingTop: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                
              <View style={styles.social2}>
                <Text style={globalStyles.lightTitleText}>Fabric</Text>
                
              </View>
              
              <View style={styles.social2}>
              <Text style={globalStyles.lightTitleText}>Colour</Text>
                
              </View>
              
              
              
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 0,
                paddingBottom: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <View style={styles.socialtext}>
                
                <Text>       Chocolate                                      </Text>
                </View>
                <View style={styles.socialtext}>
                                
                                <Text> 6                                          </Text>
                                </View>
                                </View>
                                            
      <View style={{borderBottomWidth:0.6,borderBottomColor:"grey",width:"100%"}}></View>
      <Text style={{fontWeight:"bold", width:"90%", marginTop:10, marginLeft:20}}>More from this closet                                                                                 </Text>
      
      <View style={{marginTop:5, borderBottomWidth:0.6,borderBottomColor:"grey",width:"30%", marginRight:"78%", marginLeft:"4.5%"}}>

             

      </View>


      <View style={{flex:1,flexDirection:"row", marginTop:20}}>
     
            <Image
              style={{
                paddingVertical: 30,
                width: 110,
                height: 180,
               
                marginLeft: 30,
                marginBottom: 5,
              }}
              resizeMode="cover"
              source={{uri:"https://source.unsplash.com/1024x768/?nature"}}
            />
      
                        <Image
              style={{
                paddingVertical: 30,
                width: 110,
                height: 180,
               
                marginLeft: 20,
                marginBottom: 5,
              }}
              resizeMode="cover"
              source={{uri:"https://source.unsplash.com/1024x768/?water"}}
              
            />

            
                        <Image
              style={{
                paddingVertical: 30,
                width: 110,
                height: 180,
               
                marginLeft: 20,
                marginBottom: 5,
              }}
              resizeMode="cover"
              source={{uri:"https://source.unsplash.com/1024x768/?girl"}}
            />
            
                     
        
        </View>    
        <View style={{position:"absolute",top:"96.5%",right:"9%"}}>
                
               <Icon
                name="favorite-border"
                size={25}
                color="white"
                />
            

                </View>
        <View style={{position:"absolute",top:"96.5%",right:"39%"}}>
                
               <Icon
                name="favorite-border"
                size={25}
                color="white"
                />
            

                </View>
        <View style={{position:"absolute",top:"96.5%",left:"25%"}}>
                
               <Icon
                name="favorite-border"
                size={25}
                color="white"
                />
            

                </View>

                

        </ScrollView>
 
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },

  social1: {
    width: '30%',
    marginRight: '1%',
    marginLeft: '1%',
    borderBottomWidth: 0.8,
    borderBottomColor: darkgrey,
    marginTop:40
  },
  headerIcon:{
    marginLeft:15
},
  heading: {
    paddingTop: '0%',
    paddingBottom: '0%',
    flexDirection: 'row',
    width: '100%',
  },
    
  social: {
    width: '43%',
    marginRight: '4%',
    marginLeft: '4%',
    borderWidth: 0.8,
    borderColor: 'grey',
    borderRadius: 5,
  },
  picker: {
    color: 'grey',
  },
  
  social2: {
    width: '44%',
    marginRight: '2%',
    marginLeft: '2%',
    borderBottomWidth: 0.8,
    borderBottomColor: darkgrey,
    marginTop:30
  },
  
  
  input: {
    width: '100%',
    // borderWidth: 1,
    // height:"29%",
    borderColor: mediumgrey,
    // fontStyle:"bold",
    fontSize:16,
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
  picker:{
    color:"black"
  },
  buttons: {
    width: '94%',
  marginLeft:"3%",    
  marginRight:"3%",    
  },
});