import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import BlankHeader from '../../shared/blankheader';
import Home from '../screens/home';


const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <BlankHeader title='Movie Zone' navigation={navigation} />
      }
    },
  },
  
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    
    headerStyle: {backgroundColor: "#46D5D8", height: 50 },
  },
});

export default HomeStack;


