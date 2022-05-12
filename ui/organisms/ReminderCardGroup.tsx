import React from "react";
import { View, StyleSheet } from "react-native";
import { Reminder } from "../../types/Reminder";
import FabElement from "../atoms/FabElement";
import TitleElement from "../atoms/TitleElement";
import ReminderCard from "../molecules/ReminderCard";

type ReminderCardGroupProps = {
  reminder?: Reminder;
  onEdit: () => void;
  onDelete: () => void;
  onCreate: () => void;
};

function ReminderCardGroup(props: ReminderCardGroupProps) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  if (props.reminder == null) {
    return (
      <View style={styles.container}>
        <TitleElement name="No reminders set" />
        <FabElement name="Create" hidden={false} onPress={props.onCreate} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ReminderCard
          reminder={props.reminder!}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
      </View>
    );
  }
}

export default ReminderCardGroup;
