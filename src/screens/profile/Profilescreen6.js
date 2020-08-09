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
import { SliderBox } from "react-native-image-slider-box";
import {HollowButton} from '../../shared/button';
import {DeleteButton} from '../../shared/button';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import {Icon} from 'react-native-elements';
import {globalStyles, darkbg, mediumgrey, darkgrey} from '../../styles/global';

export default class ProfileScreen6  extends Component {
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
      <Text style={{fontWeight:"bold", width:"90%", marginTop:10, }}>Amount                                                                                 </Text>
      <View style={{marginTop:5, borderBottomWidth:0.6,borderBottomColor:"grey",width:"12%", marginRight:"78%"}}></View>
      <View
              style={{
                flexDirection: 'row',
                paddingTop: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                
              <View style={styles.social}>
                <Text style={globalStyles.lightTitleText}>Rental Price</Text>
                
              </View>
              
              <View style={styles.social1}>
                
                
              </View>
              <View style={styles.social1}>
                
                
              </View>
              
              
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
                
                <Text>      4 days for $99              </Text>
                </View>
                <View style={styles.socialtext}>
                                
                                <Text>10 days for $199          </Text>
                                </View>
                <View style={styles.socialtext}>
                                
                                <Text>20 days for $399          </Text>
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
                <Text style={globalStyles.lightTitleText}>Bond Money</Text>
                
              </View>
              
              <View style={styles.social2}>
              <Text style={globalStyles.lightTitleText}>Retail Price</Text>
                
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
                
                <Text>$999                                            </Text>
                </View>
                <View style={styles.socialtext}>
                                
                                <Text>     $1299                                          </Text>
                                </View>
                

              </View>
            <View style={{marginLeft:15, marginTop:30, borderBottomWidth:0.6,borderBottomColor:"grey",width:"93%"}}></View>
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
                
                <Text>  Two Tier                                           </Text>
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
                
                <Text>Luxury                                          </Text>
                </View>
                <View style={styles.socialtext}>
                                
                                <Text>           6                                          </Text>
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
                
                <Text>Chocolate                                          </Text>
                </View>
                <View style={styles.socialtext}>
                                
                                <Text>       6                                          </Text>
                                </View>
                                </View>

                                <View style={styles.buttons}>
          <TouchableOpacity>
            <HollowButton
              
              text="Item Calender"
              onPress={()=>this.props.navigation.navigate('LoginProfile-7')}
              ></HollowButton>
          </TouchableOpacity>
        </View>                        
                  <View style={styles.buttons}>
          <TouchableOpacity>
            <HollowButton
              
              text="Edit Item"
              
              ></HollowButton>
          </TouchableOpacity>
        </View>                        
                                 <View style={styles.buttons}>
          <TouchableOpacity>
            <DeleteButton
              
              text="Delete Item"
              ></DeleteButton>
          </TouchableOpacity>
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
  social: {
    width: '30%',
    marginRight: '1%',
    marginLeft: '1%',
    borderBottomWidth: 0.8,
    borderBottomColor: darkgrey,
    marginTop:20
  },
  social1: {
    width: '30%',
    marginRight: '1%',
    marginLeft: '1%',
    borderBottomWidth: 0.8,
    borderBottomColor: darkgrey,
    marginTop:40
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