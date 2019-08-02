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
      selected2: "7aga msh fahemha 1",
      chosenDate: null,
      telephoneNumber: null,
      email:null,
      alamat: null
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
    console.warn(this.state.chosenDate.toString().substr(4, 12));
  }

  onValueChange(text, type) {
    if (type === "telephone number") {
      this.setState({
        telephoneNumber: text
      });
    }
    else if(type === "email"){
      this.setState({
        email: text
      });
    }
    else if(type === "alamat"){
      this.setState({
        alamat: text
      });
    }
  }

  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }
  validation (){
    if(this.state.chosenDate===null||this.state.telephoneNumber===null||this.state.email===null||this.state.alamat===null){
      return true
    }
    return false
  }
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item picker>
              <Label style={{ paddingLeft: 3 }}>jenis Kelamin</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
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
                dateFormat="yyyy/MM/dd HH:mm"
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
              <Input
                keyboardType="numeric"
                onChangeText={(text) =>
                  this.onValueChange(text, "telephone number")
                }
              />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={(text) => this.onValueChange(text, "email")} />
            </Item>
            <Item floatingLabel>
              <Label>Alamat</Label>
              <Input
                onChangeText={(text) => this.onValueChange(text, "alamat")}
              />
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
                onPress={() => {console.warn(this.state) 
                  this.props.navigation.navigate("CompanySecond")}}
                disabled={this.validation()}
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
