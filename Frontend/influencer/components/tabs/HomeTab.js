import React, { Component } from "react";
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import { Icon } from "native-base";
import Rating from "../homeTabs/Rating";
import Top from "../homeTabs/Top";
import New from "../homeTabs/New";
const AppTabNavigator = createMaterialTopTabNavigator(
  {
    Rating: { screen: Rating },
    Top: { screen: Top },
    New: { screen: New }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "top",
    tabBarOptions: {
      style: {
        backgroundColor: "white"
      },
      indicatorStyle: {
        backgroundColor: "#1D8BF1"
      },
      tabStyle: {
        marginTop: 0,
        flexDirection: "row"
      },
      iconStyle: { height: 15 },
      activeTintColor: "#1D8BF1",
      inactiveTintColor: "#89CFF0",
      upperCaseLabel: false,
      showLabel: true,
      showIcon: true
    }
  }
);
const AppTabContainet = createAppContainer(AppTabNavigator);
export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <AppTabContainet/>
    );
  }
}
