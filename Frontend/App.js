import React from "react";
import * as Expo from "expo";
import * as Font from 'expo-font'
import AppNavigator from "./AppNavigator";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  componentWillMount() {
    this.loadFonts();
  }  async loadFonts() {
    await Font.loadAsync({
       Roboto_medium: require("./node_modules/react-native/RNTester/android/app/src/main/assets/fonts/Roboto-Medium.ttf"),
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <AppNavigator/>
    );
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
