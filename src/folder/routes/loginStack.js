import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "../../shared/header";
import Login from "../../screens/auth/Auth";

const screens = {
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="Cake Shop" navigation={navigation} />,
      };
    },
  },
};

const LoginStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#46D5D8",
    headerStyle: { backgroundColor: "#46D5D8", height: 250 },
  },
});

export default LoginStack;
