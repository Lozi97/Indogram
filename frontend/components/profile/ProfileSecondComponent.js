import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FlatGrid } from "react-native-super-grid";
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

  render() {
    return (
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
  }
});
