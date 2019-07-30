import React, { Component } from "react";
import { Image, ScrollView, View,Button,Alert} from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  
  Icon,
  Left,
  Body,
  Right
} from "native-base";

export default class SearchTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-bookmark' style={{ color: tintColor }} />
        )
    }
  render() {
    return (
      <View>
       <Button
  onPress={() => {
    console.log(this.props.navigation);
  }}
  title="Press Me"
  color= "#4BB543"
/>
      </View>
    );
  }
}

// const style = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     }
// });





