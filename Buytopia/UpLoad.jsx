import React from "react";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";

function UpLoad(props) {
  return (
    <View>
      <Text style={styles.parallax} text="New Listing" />
      <View>Image upload</View>
      <View>
        <TextInput placeholder="Title" style={styles.Input1} />
        <TextInput placeholder="Price" style={styles.Input2} />
        <TextInput placeholder="Category" style={styles.Input3} />
        <TextInput placeholder="Description" style={styles.Input4} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footertxt}>POST</Text>
        <Text style={styles.footertxt}>CANCEL</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Input1: {
    width: "80vw",
    backgroundColor: "grey",
    fontSize: 13,
  },
  Input2: {
    width: "10vw",
    backgroundColor: "grey",
    fontSize: 13,
  },
  Input3: {
    width: "30vw",
    backgroundColor: "grey",
    fontSize: 13,
  },
  Input4: {
    width: "80vw",
    backgroundColor: "grey",
    fontSize: 13,
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  footertxt: {
    backgroundColor: "red",
    color: "#fff",
    fontSize: 13,
  },
});
export default UpLoad;
