import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function Welcome(props) {
  return (
    <View>
      <Text style={styles.parallax} text="Buytopia">
        BUYTOPIA
      </Text>
      <Image style={styles.img} src="" alt="picture" />
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    color: "#000",
    flex: 1,
  },
  parallax: {
    position: "absolute",
    fontFamily: "sans-serif",
    fontSize: "15px",
    fontStyle: "italic",
  },
  img: {
    width: "20%",
    animation: "Anna 3.5s infinite alternate",
  },
});
const keyframes = StyleSheet.create({
  Anna: {
    "0%, 10%": {
      transform: "translate(100vw, 0) rotate(35deg)",
    },
    "10%, 30%": {
      transform: "translate(-5vw, -5vw) rotate(-30deg)",
    },
  },
});
export default Welcome;
