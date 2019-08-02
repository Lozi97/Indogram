import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { Button, Container, Form, Item } from "native-base";
export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = id => {
    const objIndex = items.findIndex(obj => obj.id == id);
    items[objIndex].pressed = !items[objIndex].pressed;
    this.setState(this.state);
  };
  handleSubmit = () => {
    var result = new Array();
    for (var i in items) {
      if (items[i].pressed === true) {
        result.push(items[i]);
      }
    }
    // console.log(result);
    this.props.navigation.navigate("InfluencerThird");
  };
  render() {
    return (
      <Container>
        <FlatGrid
          itemDimension={130}
          items={items}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          // spacing={20}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.handleClick(item.id)}>
              <View
                style={[
                  styles.itemContainer,
                  { backgroundColor: item.pressed ? "green" : "gray" }
                ]}
              >
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCode}>{item.code}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <Form style={{ paddingTop: "10%" }}>
          <Item
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderColor: "white"
            }}
          >
            <Button style={styles.Button} onPress={this.handleSubmit}>
              <Text style={{ textAlign: "center", alignItems: "center" }}>
                {" "}
                submit{" "}
              </Text>
            </Button>
          </Item>
        </Form>
      </Container>
    );
  }
}
const items = [
  { name: "#fashion", id: 1, pressed: false },
  { name: "#health", id: 2, pressed: false },
  { name: "#food", id: 3, pressed: false },
  { name: "#lifestyle", id: 4, pressed: false },
  { name: "#technology", id: 5, pressed: false },
  { name: "#travel", id: 6, pressed: false },
  { name: "#game", id: 7, pressed: false },
  { name: "#parenting", id: 8, pressed: false }
];
const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600"
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff"
  },
  Button: {
    fontSize: 200
  }
});
