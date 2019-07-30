import { createStackNavigator, createAppContainer } from "react-navigation";
import Profile from "./components/profile/Profile";
import ProfileThirdComponent from "./components/profile/ProfileThirdForm";
import MainScreen from "./components/MainScreen";
import secondComponent from "./components/profile/ProfileSecondComponent";
import adv from "./components/tabs/AddMediaTab";
import Form from "./components/Form"
const RootStack = createStackNavigator({
  MainScreen: {
    screen: MainScreen
  },
  Profile: {
    screen: Profile
  },
  Second: {
    screen: secondComponent
  },
  Third: {
    screen: ProfileThirdComponent
  },
  Form:{
    screen:Form
  }
});

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;
