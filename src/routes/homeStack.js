import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BlankHeader from '../shared/blankheader';
import Home from '../screens/Home/Home';


// const screens = {
//   Home: {
//     screen: Home,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitle: () => <BlankHeader title='LOGO' navigation={navigation} />
//       }
//     },
//   },
  
// };

// home stack navigator screens
const Stack=createStackNavigator();
const HomeStack = ({navigation})=> {
  return(
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ 
      gestureEnabled: false,
      headerTitle: () => <BlankHeader title='LOGO' navigation={navigation} />,
      headerStyle: {backgroundColor: "#46D5D8", height: 50 },
    }}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ title: 'My app' }}
    />
    {/* <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      initialParams={{ user: 'me' }}
    /> */}
  </Stack.Navigator>
  );

};

export default HomeStack;


