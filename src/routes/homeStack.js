import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BlankHeader from '../shared/blankheader';
import Home from '../screens/Home/Home';
import { Icon } from 'react-native-elements';


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
      headerLeft: () => (
        <Icon
          onPress={() => navigation.toggleDrawer()}
          name="menu"
          color="#000"
          size={40}
          
        />
      ),
      headerRight: () => (
        <Icon
          onPress={() => navigation.toggleDrawer()}
          name="search"
          color="#000"
          size={50}
          
        />
      ),
      headerTitle: () => <BlankHeader title='LOGO' navigation={navigation} />,
      headerStyle: {backgroundColor: "#46D5D8", height: 60 },
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


