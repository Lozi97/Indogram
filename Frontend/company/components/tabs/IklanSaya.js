import React, { Component } from "react";
import * as reactNative from "react-native"
import {
  View,
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button
} from "native-base";

export default class IklanSaya extends Component {
  // static navigationOptions = {
  //   tabBarIcon: ({ tintColor }) => (
  //     <Icon name="ios-bookmark" style={{ color: tintColor }} />
  //   )
  // };
  _onPressButton() {
     this.props.screenProps.screenProps.onClick()
  }
  _handleClick(){
    this.props.screenProps.screenProps.onClick1()
  }
  render() {
    return (
      <View>
        <reactNative.Button
        onPress={this._onPressButton.bind(this)}
          title="Create AD"
          color="#4BB543"
        />
    
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require("../../../assets/about.jpg")} />
              </Left>
              <Body>
                <Text>strategy</Text>
                <Text note numberOfLines={1}>
                  deadline : 21/8/2019
                </Text>
              </Body>
              <Right>
                <Button transparent onPress={this._handleClick.bind(this)}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require("../../../assets/Adversting-and-Marketing-Copmany-Lebanon-1.jpg")} />
              </Left>
              <Body>
                <Text>Adversting</Text>
                <Text note numberOfLines={1}>
                  deadline : 21/8/2019
                </Text>
              </Body>
              <Right>
                <Button transparent onPress={this._handleClick.bind(this)}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
      </View> 
    );
  }
}

