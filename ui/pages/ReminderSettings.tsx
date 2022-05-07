import React from "react";
import { StyleSheet, View } from "react-native";
import Recurrence from "../../types/Recurrence";
import { Reminder } from "../../types/Reminder";
import RecurrenceGroup from "../molecules/RecurrenceGroup";
import MultiselectWeekdaysGroup from "../organisms/MultiselectWeekdaysGroup";
import Navbar from "../organisms/Navbar";
import ReminderCardGroup from "../organisms/ReminderCardGroup";

function ReminderSettings( {navigation} ) {
  return (
    <View style={styles.container}>
      <MultiselectWeekdaysGroup />
      <RecurrenceGroup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ReminderSettings;
