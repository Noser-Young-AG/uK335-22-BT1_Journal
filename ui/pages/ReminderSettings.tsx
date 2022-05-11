import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Recurrence from "../../types/Recurrence";
import { Reminder } from "../../types/Reminder";
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


function ReminderSettings( {navigation} ) {
  const [time, setTime] = useState(new Date());
  const [buttonText, setButtonText] = useState(
    time.getHours() + ":" + time.getMinutes()
  );

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

  return (
    <ScrollView style={styles.container}>
      <MultiselectWeekdaysGroup />
      <RecurrenceGroup />
      <RepeatInputGroup />
      <TimeGroup label="Choose Time" onChange={onTimeChange} value={time}/>
    </ScrollView>
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
