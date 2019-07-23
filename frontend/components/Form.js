import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { DocumentPicker } from "expo";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Textarea,
  Picker,
  Icon,
  Text,
  Button,
  View
} from "native-base";
export default class ProposalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      selected2: undefined
    };
    
  }
 
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };
  // _pickDocument = async () => {
  //   let result = await DocumentPicker.getDocumentAsync({});
  //   alert(result.uri);
  //   console.log(result);
  // };
  _pickImage = async () => {
    this.getPermissionAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }
  render() {
    let { image } = this.state;
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Endorse Title</Label>
              <Input />
            </Item>
            <Textarea rowSpan={3} bordered placeholder="Description" />
            <Item floatingLabel>
              <Label>Minimum Followers (in K)</Label>
              <Input keyboardType="numeric" />
            </Item>
            <Item floatingLabel>
              <Label>Endorse Needed</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Period (in days)</Label>
              <Input keyboardType="numeric" />
            </Item>
            <Item floatingLabel>
              <Label>budget</Label>
              <Input />
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined, paddingBottom: "10%" }}
                placeholder="Select Your Endorsement Type"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="feed story" value="key0" />
                <Picker.Item label="post timeline" value="key1" />
                <Picker.Item label="story with swipe up" value="key2" />
              </Picker>
            </Item>

            {/* <Item style={{borderColor:"white"}}>
              <a7a.Button
                title="Select Document"
                onPress={this._pickDocument}
              />
            </Item> */}
            <Item style={{ borderColor: "white" }}>
              <Button transparent onPress={this._pickImage}>
                <Text>Pick an image/video from camera roll</Text>
              </Button>
            </Item>
          </Form>
          <Form>
            <Item
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderColor: "white"
              }}
            >
              <Button primary>
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
  padding: {
    paddingBottom: "10%"
  }
});
