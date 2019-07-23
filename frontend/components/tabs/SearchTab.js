import React, { Component } from "react";
import { Image ,ScrollView,View} from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

export default class SearchTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-browsers" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
        <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image
                source={require("../../assets/about.jpg")}
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
          </Card>
        </Content>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image
                source={require("../../assets/Adversting-and-Marketing-Copmany-Lebanon-1.jpg")}
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
          </Card>
        </Content>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image
                source={require("../../assets/Adversting-and-Marketing-Copmany-Lebanon-1.jpg")}
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
          </Card>
        </Content>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image
                source={require("../../assets/Adversting-and-Marketing-Copmany-Lebanon-1.jpg")}
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
          </Card>
        </Content>
        </ScrollView>
      </View>
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
