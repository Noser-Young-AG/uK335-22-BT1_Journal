import React from "react";
import { StyleSheet, View } from "react-native";
import ButtonElement from "../atoms/ButtonElement";

export default function ActionButtons() {
  return (
    <>
      <View style={styles.container2}>
        <ButtonElement name={"Delete"} color={"#0000003C"}></ButtonElement>
      </View>
      <View style={styles.container}>
        <ButtonElement name={"Save"} color={"#01A299"}></ButtonElement>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    right: 5,
    top: 5,
    backgroundColor: "#fff",
  },
  container2: {
    flex: 1,
    position: "absolute",
    left: 5,
    top: 5,
    backgroundColor: "#fff",
  },
});
