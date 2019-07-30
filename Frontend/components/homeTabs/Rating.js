import React, { Component } from "react";
import {
  Image,
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  FlatList
} from "react-native";
import {
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import Grid from "react-native-grid-component";

const data = [
  {
    name: "Abdelrahman khaled",
    image: require("../../assets/abdo.jpg"),
    numberOfFollowers: 100000000000
  },
  {
    name: "Mouhamadou Barry",
    image: require("../../assets/mou.jpeg"),
    numberOfFollowers: 1
  },
  {
    name: "Ahmed Lozi",
    image: require("../../assets/lozi.jpg"),
    numberOfFollowers: 0.5
  },
];
const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};
const numColumns = 2;
export default class Rating extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-star" style={{ color: tintColor }} />
    )
  };

  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <Text>{item.name}</Text>
        <Image
          source={item.image}
          style={{
            width: 100,
            height: 97
          }}
        />
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <Icon active name="md-people" />
          <Text style={{ paddingLeft: 6 }}>{item.numberOfFollowers}+</Text>
        </View>
        <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row"
                  }}
                >
        <Button
          style={{
            height: 30,
            backgroundColor: "transparent",
            borderColor: "#1D8BF1",
            borderWidth: 1,
            elevation: 0
          }}
        >
          <Text style={{ color: "#1D8BF1" }}> Chat </Text>
        </Button>
        </View>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20
  },
  item: {
    alignItems: "center",
    flex: 1,
    margin: 1,
    borderColor:"#d1cece",
    borderWidth:1,
    height: Dimensions.get("window").width / numColumns // approximate a square
  },
  itemInvisible: {
    alignItems: "center",
    flex: 1,
    margin: 1,
    height: Dimensions.get("window").width / numColumns,
    backgroundColor: "transparent"
  },
  itemText: {
    color: "#fff"
  }
});

//  <ScrollView style={styles.mainContainer}>
//           <Content>
// <Card style={styles.containerStyle}>
//   <CardItem>
//     <Body style={{ alignItems: "center" }}>
//       <Text>Abdelrahman khaled</Text>
//     </Body>
//   </CardItem>
//   <CardItem cardBody>
//     <Image
//       source={require("../../assets/abdo.jpg")}
//       style={{ height: 300, width: 10, flex: 1 }}
//     />
//   </CardItem>
//   <CardItem>
//     <Body
//       style={{
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "row"
//       }}
//     >
//       <Icon active name="md-people" />
//       <Text>100000000000+</Text>
//     </Body>
//   </CardItem>
//   <CardItem>
//     <Body
//       style={{
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "row"
//       }}
//     >
//       <Button
//         style={{
//           height: 30,
//           backgroundColor: "transparent",
//           borderColor: "#1D8BF1",
//           borderWidth: 1,
//           elevation: 0
//         }}
//       >
//         <Text style={{ color: "#1D8BF1" }}> Chat </Text>
//       </Button>
//     </Body>
//   </CardItem>
// </Card>
//           </Content>
//           <Content>
//             <Card style={styles.containerStyle}>
//               <CardItem>
//                 <Body style={{ alignItems: "center" }}>
//                   <Text>mouhamadou barry</Text>
//                 </Body>
//               </CardItem>
//               <CardItem cardBody>
//                 <Image
//                   source={require("../../assets/mou.jpeg")}
//                   style={{ height: 10, width: null, flex: 1 }}
//                 />
//               </CardItem>
//               <CardItem>
// <Body
//   style={{
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "row"
//   }}
// >
//   <Icon active name="md-people" />
//   <Text>1+</Text>
// </Body>
//               </CardItem>
//               <CardItem>
                // <Body
                //   style={{
                //     alignItems: "center",
                //     justifyContent: "center",
                //     flexDirection: "row"
                //   }}
                // >
// <Button
//   style={{
//     height: 30,
//     backgroundColor: "transparent",
//     borderColor: "#1D8BF1",
//     borderWidth: 1,
//     elevation: 0
//   }}
// >
//   <Text style={{ color: "#1D8BF1" }}> Chat </Text>
// </Button>
//                 </Body>
//               </CardItem>
//             </Card>
//           </Content>
//         </ScrollView>
