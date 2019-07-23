import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";

import Swiper from "react-native-swiper";
import { Row, Button } from "native-base";

export default class SlideApp extends Component {
  render() {
    return (
      <View style={styles.slide1}>
        <Image
          source={require("../../assets/man.jpg")}
          style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
        />
        <Text style={styles.text}>abdelrahman khaled</Text>
        {/* <View style={styles.buttonView}>
          <Button block style={styles.button}>
            <Text>Edit Profile</Text>
          </Button>
        </View> */}
        <View
          style={{
            paddingBottom: "10%",
            paddingTop: "2%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button block style={styles.button}>
            <Text>change to company</Text>
          </Button>
        </View>
      </View>
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
