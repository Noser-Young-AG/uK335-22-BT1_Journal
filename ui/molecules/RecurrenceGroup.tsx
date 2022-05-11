import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RadioButton } from "react-native-paper";
import GroupTitle from "../atoms/GroupTitle";

export default function RecurrenceGroup() {
  const [checked, setChecked] = React.useState("");

  return (
    <View style={styles.container}>
      <GroupTitle title={"Recurrence"}></GroupTitle>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton.Android
          value="element1"
          status={checked === "element1" ? "checked" : "unchecked"}
          onPress={() => setChecked("element1")}
          color="#6200EE"
        />
        <Text onPress={() => setChecked("element1")}>Weekly</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton.Android
          value="element2"
          status={checked === "element2" ? "checked" : "unchecked"}
          onPress={() => setChecked("element2")}
          color="#6200EE"
        />
        <Text onPress={() => setChecked("element2")}>Monthly</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton.Android
          value="element3"
          status={checked === "element3" ? "checked" : "unchecked"}
          onPress={() => setChecked("element3")}
          color="#6200EE"
        />
        <Text onPress={() => setChecked("element3")}>None</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "90%",
  },
});
