import React from "react";
import { StyleSheet } from "react-native";
import UpperProfile from "./UpperProfile";
import ProfileForm from "./ProfileForm";
import { Container } from "native-base";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <UpperProfile navigation={this.props.navigation} />
        <ProfileForm navigation={this.props.navigation} />
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
