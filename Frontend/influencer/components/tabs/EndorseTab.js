import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Tab, Tabs, TabHeading, Icon, Text, Container } from "native-base";
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import NewProposal from "../endorseTabs/NewProposal";
import AcceptedProposal from "../endorseTabs/AcceptedProposal";
import WaitingProposal from "../endorseTabs/WaitingProposal";
import FinishedProposal from "../endorseTabs/FinishedProposal";
const AppTabNavigator = createMaterialTopTabNavigator(
  {
    New: { screen: NewProposal },
    Accepted: { screen: AcceptedProposal },
    Waiting: { screen: WaitingProposal },
    Finished: { screen: FinishedProposal }
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
      iconStyle: { height: 15 },
      activeTintColor: "#1D8BF1",
      inactiveTintColor: "#89CFF0",
      upperCaseLabel: false,
      showLabel: false,
      showIcon: true
    }
  }
);
const AppTabContainet = createAppContainer(AppTabNavigator);
export default class EndorseTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-pricetags" style={{ color: tintColor }} />
    )
  };

  render() {
    return <AppTabContainet />;
  }
}

const styles = StyleSheet.create({
  tabStyle: { backgroundColor: "transparent" },
  activeTabStyle: { backgroundColor: "transparent" },
  activeTextStyle: { fontWeight: "bold", color: "#651FFF", fontSize: 17 },
  textStyle: { color: "#7C4DFF", fontWeight: "bold", fontSize: 16 }
});
