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
              {/* <Right>
                <Button iconLeft transparent style={{color:"#1D8BF1"}}>
                  <Icon name="ios-briefcase" />
                </Button>
              </Right> */}
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require("../../../assets/about.jpg")}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Text>
                description description description description description
                description description description description description
                description description description description
                descriptiondescription description description
              </Text>
            </CardItem>
            <CardItem style={{ borderColor: "#d1cece", borderWidth: 1 }}>
              <Left>
                <Body>
                  <Text style={{ fontWeight: "bold" }}>200</Text>
                  <Text>proposal</Text>
                </Body>
              </Left>
              <Body>
                <Text style={{ fontWeight: "bold" }}>200</Text>
                <Text>accepted</Text>
              </Body>
              <Right>
                <Body>
                  <Text style={{ fontWeight: "bold" }}>200</Text>
                  <Text>finished</Text>
                </Body>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Adversting</Text>
                  <Text note>deadline : 21/8/2019</Text>
                </Body>
              </Left>
              {/* <Right>
                <Button iconLeft transparent style={{color:"#1D8BF1"}}>
                  <Icon name="ios-briefcase" />
                </Button>
              </Right> */}
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require("../../../assets/Adversting-and-Marketing-Copmany-Lebanon-1.jpg")}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Text>
                description description description description description
                description description description description description
                description description description description
                descriptiondescription description description
              </Text>
            </CardItem>
            <CardItem style={{ borderColor: "#d1cece", borderWidth: 1 }}>
              <Left>
                <Body>
                  <Text style={{ fontWeight: "bold" }}>200</Text>
                  <Text>proposal</Text>
                </Body>
              </Left>
              <Body>
                <Text style={{ fontWeight: "bold" }}>200</Text>
                <Text>accepted</Text>
              </Body>
              <Right>
                <Body>
                  <Text style={{ fontWeight: "bold" }}>200</Text>
                  <Text>finished</Text>
                </Body>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Adversting</Text>
                  <Text note>deadline : 21/8/2019</Text>
                </Body>
              </Left>
              {/* <Right>
                <Button iconLeft transparent primary>
                  <Icon name="ios-briefcase" />
                </Button>
              </Right> */}
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require("../../../assets/Adversting-and-Marketing-Copmany-Lebanon-1.jpg")}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Text>
                description description description description description
                description description description description description
                description description description description
                descriptiondescription description description
              </Text>
            </CardItem>
            <CardItem style={{ borderColor: "#d1cece", borderWidth: 1 }}>
              <Left>
                <Body>
                  <Text style={{ fontWeight: "bold" }}>200</Text>
                  <Text>proposal</Text>
                </Body>
              </Left>
              <Body>
                <Text style={{ fontWeight: "bold" }}>200</Text>
                <Text>accepted</Text>
              </Body>
              <Right>
                <Body>
                  <Text style={{ fontWeight: "bold" }}>200</Text>
                  <Text>finished</Text>
                </Body>
              </Right>
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
