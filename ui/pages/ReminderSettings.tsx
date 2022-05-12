import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import NavigationPages from "../../types/NavigationPages";
import Recurrence, { getRecurrenceString } from "../../types/Recurrence";
import { Reminder } from "../../types/Reminder";
import { loadReminder, updateReminder } from "../../utils/Persistence";
import ButtonElement from "../atoms/ButtonElement";
import RecurrenceGroup from "../molecules/RecurrenceGroup";
import RepeatInputGroup from "../molecules/RepeatInputGroup";
import TimeGroup from "../molecules/TimeGroup";
import MultiselectWeekdaysGroup from "../organisms/MultiselectWeekdaysGroup";

function ReminderSettings({ navigation }) {
  const [reminder, setReminder] = useState<Reminder>();
  const [weekday, setWeekday] = useState<string>("Friday");
  const [recurrence, setRecurrence] = useState<number>(Recurrence.WEEKLY);
  const [recurringAmount, setRecurringAmount] = useState<
    number | string | undefined
  >(recurrence !== Recurrence.NONE ? "forever" : undefined);
  const [time, setTime] = useState(new Date());
  const [buttonText, setButtonText] = useState(
    time.getHours() + ":" + time.getMinutes()
  );

  useEffect(() => {
    const localReminder = loadReminder();
    localReminder.then((r) => {
      console.log(JSON.stringify(r));
      setReminder(r);
      if (r != undefined) {
        console.log("Reminder not undefined");
        setWeekday(r.weekday);
        setRecurrence(r.recurrence);
        setRecurringAmount(r.recurringAmount);
      }
    });
  }, []);

  useEffect(() => {
    console.log("UE Weekday: " + weekday);
    console.log("UE Recurrence: " + getRecurrenceString(recurrence));
  }, [weekday, recurrence]);

  useEffect(() => {
    if (recurrence === Recurrence.NONE) {
      setRecurringAmount(undefined);
    }
  }, [recurrence]);

  const saveReminderAndClose = () => {
    updateReminder(new Reminder(recurrence, weekday!, 20, 15, recurringAmount));

    navigation.navigate(NavigationPages.HOME);
  };

  const onTimeChange = (date: Date) => {
    if (date instanceof Date && date != null) {
      setTime(date);
      if (date.getHours() <= 9 && date.getMinutes() <= 9) {
        setButtonText("0" + date.getHours() + ":0" + date.getMinutes());
      } else if (date.getHours() > 9 && date.getMinutes() <= 9) {
        setButtonText(date.getHours() + ":0" + date.getMinutes());
      } else if (date.getHours() <= 9 && date.getMinutes() > 9) {
        setButtonText("0" + date.getHours() + ":" + date.getMinutes());
      } else {
        setButtonText(date.getHours() + ":" + date.getMinutes());
      }
    }
  };

  const getRecurringAmountElement = () => {
    if (recurrence !== Recurrence.NONE) {
      return (
        <RepeatInputGroup
          recurringAmount={recurringAmount}
          recurringAmountChanged={(x) => setRecurringAmount(x)}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <MultiselectWeekdaysGroup
        selected={reminder != undefined ? reminder.weekday : weekday}
        selectedChanged={(x) => setWeekday(x)}
      />
      <RecurrenceGroup
        selected={recurrence}
        selectedChanged={(x) => setRecurrence(x)}
      />
      {getRecurringAmountElement()}
      <ButtonElement
        name="Save"
        color="#01A299"
        onPress={() => saveReminderAndClose()}
      />
      <TimeGroup label="Choose Time" onChange={onTimeChange} value={time} />
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
