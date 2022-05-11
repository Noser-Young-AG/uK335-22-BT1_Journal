import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import NavigationPages from "../../types/NavigationPages";
import Recurrence, { getRecurrenceString } from "../../types/Recurrence";
import { Reminder } from "../../types/Reminder";
import {
  deleteReminder,
  loadReminder,
  updateReminder,
} from "../../utils/Persistence";
import ButtonElement from "../atoms/ButtonElement";
import Dropdown from "../atoms/Dropdown";
import Inputfield from "../atoms/Inputfield";
import MultiselectWeekdays from "../molecules/MultiselectWeekdays";
import RecurrenceGroup from "../molecules/RecurrenceGroup";
import RepeatInputGroup from "../molecules/RepeatInputGroup";
import MultiselectWeekdaysGroup from "../organisms/MultiselectWeekdaysGroup";
import Navbar from "../organisms/Navbar";
import ReminderCardGroup from "../organisms/ReminderCardGroup";

function ReminderSettings({ navigation }) {
  const [reminder, setReminder] = useState<Reminder>();
  const [weekday, setWeekday] = useState<string>("Friday");
  const [recurrence, setRecurrence] = useState<number>(Recurrence.NONE);
  const [recurringAmount, setRecurringAmount] = useState<number | string | undefined>(recurrence !== Recurrence.NONE ? "forever" : undefined);

  useEffect(() => {
    const localReminder = loadReminder();
    localReminder.then((r) => {
      setReminder(r);
    });
  }, []);

  useEffect(() => {
    if (reminder != null) {
      updateReminder(reminder);
    } else {
      deleteReminder();
    }
  }, [reminder]);

  useEffect(() => {
    console.log(weekday);
    console.log(getRecurrenceString(recurrence));
  }, [weekday, recurrence]);

  useEffect(() => {
    if (recurrence === Recurrence.NONE) {
      setRecurringAmount(undefined);
    }
  }, [recurrence]);

  const saveReminderAndClose = () => {
    updateReminder(
      new Reminder(
        recurrence,
        weekday,
        20,
        15,
        recurringAmount
      )
    );
    
    navigation.navigate(NavigationPages.HOME);
  }

  const getRecurringAmountElement = () => {
    if (recurrence !== Recurrence.NONE) {
      return (
        <RepeatInputGroup
          recurringAmount={recurringAmount}
          recurringAmountChanged={(x) => setRecurringAmount(x)}
        />
      )
    }
  }

  return (
    <View style={styles.container}>
      <MultiselectWeekdaysGroup
        selected={typeof reminder != "undefined" ? reminder.weekday : weekday}
        selectedChanged={(x) => setWeekday(x)}
      />
      <RecurrenceGroup
        selected={recurrence}
        selectedChanged={(x) => setRecurrence(x)}
      />
      {getRecurringAmountElement()}
      {/* <RepeatInputGroup
        recurringAmount={recurringAmount}
        recurringAmountChanged={(x) => setRecurringAmount(x)}
      /> */}
      <ButtonElement name="Save" color="#000" onPress={() => saveReminderAndClose()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10,
    backgroundColor: "#fff",
    padding: "2%",
  },
});

export default ReminderSettings;
