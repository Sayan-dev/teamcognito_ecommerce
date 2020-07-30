import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

// stacks
import HomeStack from "./homeStack";
import LoginStack from "./loginStack";
import LoginFailStack from "./loginfailstack";

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  LoginFail: {
    screen: LoginFailStack,
  },
  Home: {
    screen: HomeStack,
  },
  login: {
    screen: LoginStack,
  },
  
});

export default createAppContainer(RootDrawerNavigator);
