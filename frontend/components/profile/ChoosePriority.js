import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  DatePicker,
  Picker,
  Icon,
  Text,
  Button,
  View
} from "native-base";

export default class SlideApp extends Component {
  

  render() {
    return (
      <Container>
        <Content>
          <Form>
            
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  slide1: {
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    paddingTop: "2%",
    color: "black",
    fontSize: 16,
    fontWeight: "bold"
  },
  button: {
    borderWidth: 0.2,
    borderColor: "black",
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  buttonView: {
    paddingTop: "2%",
    justifyContent: "center",
    alignItems: "center"
  }
});
