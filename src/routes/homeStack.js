import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BlankHeader from '../shared/blankheader';
import Home from '../screens/Home/Home';
import {Icon} from 'react-native-elements';
import ProfileScreen4 from '../screens/profile/Profilescreen4';
import ProfileScreen5 from '../screens/profile/Profilescreen5';
import ProfileScreen6 from '../screens/profile/Profilescreen6';
import ProfileScreen7 from '../screens/profile/Profilescreen7';
import {darkbg, globalStyles} from '../styles/global';
import SingleProductScreen1A from '../screens/Product/SingleProductScreen1A';
import SingleProductScreen2A from '../screens/Product/SingleProductScreen2A';
import SingleProductScreen3 from '../screens/Product/SingleProductScreen3';
import SingleProductScreen4 from '../screens/Product/SingleProductScreen4';

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
const Stack = createStackNavigator();
const HomeStack = ({navigation}) => {
  return (
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
        headerTitle: () => <BlankHeader title="LOGO" navigation={navigation} />,
        headerStyle: {backgroundColor: darkbg, height: 60},
      }}>
      <Stack.Screen name="Home" component={Home} options={{title: 'My app'}} />
      <Stack.Screen name="LoginProfile-4">
        {(props) => <ProfileScreen4 {...props} />}
      </Stack.Screen>
      <Stack.Screen name="LoginProfile-5">
        {(props) => <ProfileScreen5 {...props} />}
      </Stack.Screen>
      {/* <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      initialParams={{ user: 'me' }}
    /> */}
      <Stack.Screen name="LoginProfile-6">
        {(props) => <ProfileScreen6 {...props} />}
      </Stack.Screen>
      <Stack.Screen name="LoginProfile-7">
        {(props) => <ProfileScreen7 {...props} />}
      </Stack.Screen>
      <Stack.Screen name="SingleProductScreen1A">
        {(props) => <SingleProductScreen1A {...props} />}
      </Stack.Screen>
      <Stack.Screen name="SingleProductScreen2A">
        {(props) => <SingleProductScreen2A {...props} />}
      </Stack.Screen>
      <Stack.Screen name="SingleProductScreen3">
        {(props) => <SingleProductScreen3 {...props} />}
      </Stack.Screen>
      <Stack.Screen name="SingleProductScreen4">
        {(props) => <SingleProductScreen4 {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStack;
