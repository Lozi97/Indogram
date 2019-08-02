import React from "react";
import { StyleSheet } from "react-native";
import {
  Content,
  Form,
  Container,
  Item,
  Label,
  Input,
  Text,
  Button
} from "native-base";
import Main from "../MainScreen";
export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Nama Bank</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Cabang Rekening</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Nomor Rekeming</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Nama Pemagang Rekening</Label>
              <Input />
            </Item>
          </Form>
          <Form style={{ paddingTop: "10%" }}>
            <Item
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderColor: "white"
              }}
            >
              <Button
                primary
                onPress={() => this.props.navigation.navigate("InfluencerMainScreen")}
              >
                <Text> submit </Text>
              </Button>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
