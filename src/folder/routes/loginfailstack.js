import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import IconHeader from '../../shared/iconheader';
import LoginFail from '../../screens/auth/Loginfail';

const screens = {
  LoginFail: {
    screen: LoginFail,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <IconHeader title='Cake Shop' navigation={navigation} />
      }
    },
  },
}

const LoginFailStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
   
  }
});

export default LoginFailStack;