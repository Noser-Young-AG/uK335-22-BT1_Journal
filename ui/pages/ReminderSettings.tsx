import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Recurrence from "../../types/Recurrence";
import { Reminder } from "../../types/Reminder";
import { deleteReminder, loadReminder, updateReminder } from "../../utils/Persistence";
import Dropdown from "../atoms/Dropdown";
import Inputfield from "../atoms/Inputfield";
import MultiselectWeekdays from "../molecules/MultiselectWeekdays";
import RecurrenceGroup from "../molecules/RecurrenceGroup";
import RepeatInputGroup from "../molecules/RepeatInputGroup";
import MultiselectWeekdaysGroup from "../organisms/MultiselectWeekdaysGroup";
import Navbar from "../organisms/Navbar";
import ReminderCardGroup from "../organisms/ReminderCardGroup";

function ReminderSettings( {navigation} ) {
  const [reminder, setReminder] = useState<Reminder>();

  useEffect(() => {
    const localReminder = loadReminder();
    localReminder.then((r) => {
      setReminder(r);
    })
  }, []);

  useEffect(() => {
    if (reminder != null) {
      updateReminder(reminder);
    } else {
      deleteReminder();
    }
  }, [reminder]);

  return (
    <View style={styles.container}>
      <MultiselectWeekdaysGroup />
      <RecurrenceGroup />
      <RepeatInputGroup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10,
    backgroundColor: "#fff",
    padding: '2%',
  },
});

export default ReminderSettings;
