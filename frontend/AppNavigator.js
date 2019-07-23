import { createStackNavigator, createAppContainer } from "react-navigation";
import Profile from "./components/profile/Profile";
import ProfileThirdComponent from "./components/profile/ProfileThirdForm";
import MainScreen from "./components/MainScreen";
import secondComponent from "./components/profile/ProfileSecondComponent";
const RootStack = createStackNavigator({
  SecondComponent: {
    screen: secondComponent
  },
  Profile: {
    screen: Profile
  },
  MainScreen: {
    screen: MainScreen
  },
  Third: {
    screen: ProfileThirdComponent
  }
});

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;
