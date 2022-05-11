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
          value="Weekly"
          status={checked === "Weekly" ? "checked" : "unchecked"}
          onPress={() => setChecked("Weekly")}
          color="purple"
        />
        <Text onPress={() => setChecked("Weekly")}>Weekly</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton.Android
          value="Monthly"
          status={checked === "Monthly" ? "checked" : "unchecked"}
          onPress={() => setChecked("Monthly")}
          color="purple"
        />
        <Text onPress={() => setChecked("Monthly")}>Monthly</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton.Android
          value="None"
          status={checked === "None" ? "checked" : "unchecked"}
          onPress={() => setChecked("None")}
          color="purple"
        />
        <Text onPress={() => setChecked("None")}>None</Text>
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
