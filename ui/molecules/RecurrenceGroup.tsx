import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { RadioButton } from "react-native-paper";
import GroupTitle from "../atoms/GroupTitle";
import Recurrence, { getRecurrenceString } from "../../types/Recurrence";

type RecurrenceGroupProps = {
  selected: number;
  selectedChanged: (value: number) => void;
};

export default function RecurrenceGroup(props: RecurrenceGroupProps) {
  const [checked, setChecked] = React.useState(props.selected);

  useEffect(() => {
    props.selectedChanged(checked);
  }, [checked]);

  useEffect(() => {
    setChecked(props.selected);
  }, [props.selected]);

  return (
    <View style={styles.container}>
      <GroupTitle title={"Recurrence"}></GroupTitle>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton.Android
          value={getRecurrenceString(Recurrence.WEEKLY)}
          status={checked === Recurrence.WEEKLY ? "checked" : "unchecked"}
          onPress={() => setChecked(Recurrence.WEEKLY)}
          color="#6200EE"
        />
        <Text onPress={() => setChecked(Recurrence.WEEKLY)}>
          {getRecurrenceString(Recurrence.WEEKLY)}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton.Android
          value={getRecurrenceString(Recurrence.MONTHLY)}
          status={checked === Recurrence.MONTHLY ? "checked" : "unchecked"}
          onPress={() => setChecked(Recurrence.MONTHLY)}
          color="#6200EE"
        />
        <Text onPress={() => setChecked(Recurrence.MONTHLY)}>
          {getRecurrenceString(Recurrence.MONTHLY)}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton.Android
          value={getRecurrenceString(Recurrence.NONE)}
          status={checked === Recurrence.NONE ? "checked" : "unchecked"}
          onPress={() => setChecked(Recurrence.NONE)}
          color="#6200EE"
        />
        <Text onPress={() => setChecked(Recurrence.NONE)}>
          {getRecurrenceString(Recurrence.NONE)}
        </Text>
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
