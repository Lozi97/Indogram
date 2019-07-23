import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import AppNavigator from './AppNavigator';
import { Navigator } from "react-native-deprecated-custom-components";
import Profile from "./components/profile/Profile";
import Third from "./components/profile/ProfileThirdForm";
import Main from "./components/MainScreen";
import AppNavigator from "./AppNavigator";
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // <Navigator
      //   ref={navigator => (this.navigator = navigator)}
      //   initialRoute={{ id: "Main" }}
      //   renderScene={this.navigatorRenderScene}
      // />
      <AppNavigator/>
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case "Main":
        return <Main navigator={navigator} />;
      case "Profile":
        return <Profile navigator={navigator} />;
      case "Third":
        return <Third navigator={navigator} />;
    }
  }
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
