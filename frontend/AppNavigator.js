import { createStackNavigator, createAppContainer } from "react-navigation";
import Profile from "./components/profile/Profile";
import ProfileThirdComponent from "./components/profile/ProfileThirdForm";
import MainScreen from "./components/MainScreen";
import secondComponent from "./components/profile/ProfileSecondComponent";
import form from "./components/Form";
const RootStack = createStackNavigator({
  form: {
    screen: form
  },
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
  }
});

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;
