import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import NavigationPages from "../../types/NavigationPages";
import Recurrence from "../../types/Recurrence";
import { Reminder } from "../../types/Reminder";
import MultiselectWeekdaysGroup from "../organisms/MultiselectWeekdaysGroup";
import Navbar from "../organisms/Navbar";
import ReminderCardGroup from "../organisms/ReminderCardGroup";
import {loadReminder, deleteReminder, updateReminder} from '../../utils/Persistence'
import { useFocusEffect } from "@react-navigation/native";
import { cancelAllNotifications } from "../../service/ReminderNotification";

const REMINDER_STORAGE_KEY = "@reminder";

function Home({ navigation }) {
  const [reminder, setReminder] = useState<Reminder>();

  useEffect(() => {
    console.log("First use effect");
    const localReminder = loadReminder();
    localReminder.then((r) => {
      setReminder(r);
    })
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      console.log("Focus use effect");
      loadReminder()
        .then(r => setReminder(r))
        .catch(e => console.log(e));
    }, [])
  )

  useEffect(() => {
    console.log("Reminder use effect");
    if (reminder == null) {
      deleteReminder();
    }
  }, [reminder]);

  const onDelete = () => {
    setReminder(undefined);
    cancelAllNotifications();
  }

  return (
    <View style={styles.container}>
      <ReminderCardGroup
        reminder={reminder}
        onEdit={() => navigation.navigate(NavigationPages.REMINDER_SETTINGS)}
        onDelete={() => onDelete()}
        onCreate={() => navigation.navigate(NavigationPages.REMINDER_SETTINGS)}
        // onCreate={() => {
        //   setReminder(new Reminder(Recurrence.WEEKLY, "Monday", 12, 12, "forever"));
        // }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Home;
