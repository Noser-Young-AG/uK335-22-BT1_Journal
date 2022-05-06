import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RadioButton } from "react-native-paper";

export default function RecurrenceGroup() {
  const [checked, setChecked] = React.useState("");

  return (
    <View style={styles.container}>
      <Text>Recurrence</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton.Android
          value="element1"
          status={checked === "element1" ? "checked" : "unchecked"}
          onPress={() => setChecked("element1")}
          color="purple"
        />
        <Text onPress={() => setChecked("element1")}>Weekly</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton.Android
          value="element2"
          status={checked === "element2" ? "checked" : "unchecked"}
          onPress={() => setChecked("element2")}
          color="purple"
        />
        <Text onPress={() => setChecked("element2")}>Monthly</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton.Android
          value="element3"
          status={checked === "element3" ? "checked" : "unchecked"}
          onPress={() => setChecked("element3")}
          color="purple"
        />
        <Text onPress={() => setChecked("element3")}>None</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "90%",
  },
});
