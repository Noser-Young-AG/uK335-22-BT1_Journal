import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import NavigationPages from "../../types/NavigationPages";
import Recurrence from "../../types/Recurrence";
import { Reminder } from "../../types/Reminder";
import MultiselectWeekdaysGroup from "../organisms/MultiselectWeekdaysGroup";
import Navbar from "../organisms/Navbar";
import ReminderCardGroup from "../organisms/ReminderCardGroup";

const REMINDER_STORAGE_KEY = "@reminder";

function Home({ navigation }) {
  const [reminder, setReminder] = useState<Reminder>();

  useEffect(() => {
    loadReminder();
  }, []);

  useEffect(() => {
    if (reminder != null) {
      updateReminder();
    } else {
      deleteReminder();
    }
  }, [reminder]);

  const loadReminder = async () => {
    try {
      let storedReminder = await AsyncStorage.getItem(REMINDER_STORAGE_KEY);
      if (storedReminder !== null) {
        setReminder(JSON.parse(storedReminder));
      }
    } catch (e) {
      console.error("Failed to load reminder.", e);
    }
  };

  const updateReminder = async () => {
    try {
      let reminderToStore = JSON.stringify(reminder);
      await AsyncStorage.setItem(REMINDER_STORAGE_KEY, reminderToStore);
    } catch (e) {
      console.error("Failed to store reminder.", e);
    }
  };

  const deleteReminder = async () => {
    try {
      await AsyncStorage.removeItem(REMINDER_STORAGE_KEY);
    } catch (e) {
      console.error("Failed to remove reminder.", e);
    }
  };

  return (
    <View style={styles.container}>
      <ReminderCardGroup
        reminder={reminder}
        onEdit={() => navigation.navigate(NavigationPages.REMINDER_SETTINGS)}
        onDelete={() => setReminder(undefined)}
        // onCreate={() => navigation.navigate(NavigationPages.REMINDER_SETTINGS)}
        onCreate={() => {
          setReminder(new Reminder(Recurrence.WEEKLY, "Monday", 12, 12, 29));
        }}
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
