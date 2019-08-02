import React, { Component } from "react";
import {
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

export default class ProposalsTab extends Component {
  // static navigationOptions = {
  //   tabBarIcon: ({ tintColor }) => (
  //     <Icon name="ios-bookmark" style={{ color: tintColor }} />
  //   )
  // };
  _onPressButton() {
    this.props.screenProps.screenProps.onClick();
  }
  render() {
    return (
      <Container>
        <Content>
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
                <Button transparent onPress={this._onPressButton.bind(this)}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
