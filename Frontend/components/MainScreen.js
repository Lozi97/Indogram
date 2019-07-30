import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Icon } from "native-base"; // 추가된 코드
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import HomeTab from "./tabs/HomeTap";
import SearchTab from "./tabs/SearchTab";
import AddMediaTab from "./tabs/AddMediaTab";
import LikesTab from "./tabs/LikesTab";

const AppTabNavigator = createMaterialTopTabNavigator(
  {
    Home: { screen: HomeTab },
    "Semua Iklan": { screen: SearchTab },
    "Iklan Saya": { screen: AddMediaTab },
    Endorse: { screen: LikesTab }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        // ...Platform.select({
        //   ios:{
        //     backgroundColor:'white',
        //   }
        // })
        backgroundColor: "white"
      },
      indicatorStyle: {
        opacity: 0
      },
      iconStyle: { height: 10 },
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      upperCaseLabel: false,
      labelStyle: { height: 30 },
      showIcon: true
    }
  }
);

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.navigation.setParams({ handleClick: this._goToProfile });
  }
  _goToProfile = () => {
    this.props.navigation.navigate("Profile");
  };
  // static navigationOptions = {
  //   headerLeft: <Icon name='ios-camera' style={{ paddingLeft:10 }}/>,
  //   title: 'Instagram',
  //   headerRight: <Icon name='ios-send' style={{ paddingRight:10 }}/>,
  // }
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Endogram",
      headerLeft: (
        <TouchableOpacity onPress={() => params.handleClick()}>
          <Image
            source={require("../assets/man.jpg")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              paddingLeft: 10,
              padding: 6
            }}
          />
        </TouchableOpacity>
      ),
      headerTitleStyle: {
        textAlign: "center",
        flexGrow: 1,
        alignSelf: "center"
      },
      headerRight: (
        <Icon name="ios-send" style={{ paddingRight: 10, padding: 6 }} />
      )
    };
  };

  render() {
    return <AppTabContainet />;
  }
}

// static navigationOptions = ({ navigation }) => {
//   return {
//     headerTitle: <LogoTitle />,
//     headerRight: (
//       <Button
//         onPress={navigation.getParam('increaseCount')}
//         title="+1"
//         color="#fff"
//       />
//     ),
//   };
// };

// componentDidMount() {
//   this.props.navigation.setParams({ increaseCount: this._increaseCount });
// }

// state = {
//   count: 0,
// };

// _increaseCount = () => {
//   this.setState({ count: this.state.count + 1 });
// };

// /* later in the render function we display the count */
// }
