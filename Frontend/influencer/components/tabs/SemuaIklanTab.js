import React, { Component } from "react";
import { Image, ScrollView, View } from "react-native";
import {
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

export default class SemuaIklanTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-browsers" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>strategy</Text>
                  <Text note>deadline : 21/8/2019</Text>
                </Body>
              </Left>
              <Right>
                <Button iconLeft transparent style={{ color: "#1D8BF1" }}>
                  <Icon name="ios-briefcase" />
                </Button>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require("../../../assets/about.jpg")}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Body>
                  <Text>Budget</Text>
                  <Text style={{ color: "#1D8BF1" }}>
                    RP.30,000 - RP.50,000
                  </Text>
                </Body>
              </Left>
              <Right>
                <Body>
                  <Text>Min. Followers</Text>
                  <Text style={{ color: "#1D8BF1" }}>5K</Text>
                </Body>
              </Right>
            </CardItem>
            <CardItem>
              <Text>
                description description description description description
                description description description description description
                description description description description
                descriptiondescription description description
              </Text>
            </CardItem>
          </Card>
        </Content>
      </ScrollView>
    );
  }
}

// const style = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     }
// });
