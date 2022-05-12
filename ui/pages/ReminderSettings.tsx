import { ScrollView } from "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
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
import Timepicker from "../atoms/Timepicker";
import MultiselectWeekdays from "../molecules/MultiselectWeekdays";
import RecurrenceGroup from "../molecules/RecurrenceGroup";
import RepeatInputGroup from "../molecules/RepeatInputGroup";
import TimeGroup from "../molecules/TimeGroup";
import TitleGroup from "../molecules/TitleGroup";
import MultiselectWeekdaysGroup from "../organisms/MultiselectWeekdaysGroup";
import Navbar from "../organisms/Navbar";
import ReminderCardGroup from "../organisms/ReminderCardGroup";
import { sendNotification, initializeNotification, cancelAllNotifications } from "../../service/ReminderNotification";

function ReminderSettings({ navigation }) {
  const [reminder, setReminder] = useState<Reminder>();
  const [weekday, setWeekday] = useState<string>("Friday");
  const [recurrence, setRecurrence] = useState<number>(Recurrence.WEEKLY);
  const [recurringAmount, setRecurringAmount] = useState<number | string | undefined>(recurrence !== Recurrence.NONE ? "forever" : undefined);
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

        let localTime = new Date();
        localTime.setHours(r.hour, r.minute);
        setTime(localTime);
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

  useEffect(() => {
    setButtonText(time.getHours() + ":" + time.getMinutes());
  }, [time]);

  const saveReminderAndClose = () => {
    updateReminder(
      new Reminder(
        recurrence,
        weekday,
        time.getHours(),
        time.getMinutes(),
        recurringAmount
      )
    );

    cancelAllNotifications();
    initializeNotification();
    
    navigation.navigate(NavigationPages.HOME);
  }
  
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
      )
    }
  }

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
      <TimeGroup label="Choose Time" onChange={onTimeChange} value={time} />
      <ButtonElement name="Save" color="#01A299" onPress={() => saveReminderAndClose()} />
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
