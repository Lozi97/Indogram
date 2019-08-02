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
  Button
} from "native-base";

export default class SlideApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jenisKelamin: "abdo",
      chosenDate: new Date()
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  onValueChange2(value) {
    this.setState({
      jenisKelamin: value
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder={
                  this.state.jenisKelamin === null
                    ? "Jenis kelamin"
                    : this.state.jenisKelamin
                }
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="7aga msh fahemha 1" value="key0" />
                <Picker.Item label="7aga msh fahemha 2" value="key1" />
              </Picker>
            </Item>
            <Item style={{ paddingTop: "5%" }}>
              <Label>Tanggel Lahir</Label>
              <DatePicker
                style={{ paddingTop: "100%" }}
                minimumDate={new Date(2018, 1, 1)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select date"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setDate}
                disabled={false}
              />
            </Item>
            <Item floatingLabel>
              <Label>Nomor Handphone</Label>
              <Input keyboardType="numeric" />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Alamat</Label>
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
                onPress={() => this.props.navigation.navigate("InfluencerSecond")}
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

