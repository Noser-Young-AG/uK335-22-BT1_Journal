import React from "react";
import { StyleSheet, Text, View } from "react-native";

function TitleElement(props: { name: string }) {
  return <Text style={styles.text}>{props.name}</Text>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontWeight: "200",
    fontSize: 24,
    textTransform: "uppercase",
  },
});

export default TitleElement;
