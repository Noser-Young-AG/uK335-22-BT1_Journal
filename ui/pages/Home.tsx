import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import NavigationPages from "../../types/NavigationPages";
import { Reminder } from "../../types/Reminder";
import ReminderCardGroup from "../organisms/ReminderCardGroup";
import { loadReminder, deleteReminder } from "../../utils/Persistence";
import { useFocusEffect } from "@react-navigation/native";

function Home({ navigation }) {
  const [reminder, setReminder] = useState<Reminder>();

  useEffect(() => {
    console.log("First use effect");
    const localReminder = loadReminder();
    localReminder.then((r) => {
      setReminder(r);
    });
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      console.log("Focus use effect");
      const localReminder = loadReminder();
      localReminder.then((r) => {
        setReminder(r);
      });
    }, [])
  );

  useEffect(() => {
    console.log("Reminder use effect");
    if (reminder == null) {
      deleteReminder();
    }
  }, [reminder]);

  return (
    <View style={styles.container}>
      <ReminderCardGroup
        reminder={reminder}
        onEdit={() => navigation.navigate(NavigationPages.REMINDER_SETTINGS)}
        onDelete={() => setReminder(undefined)}
        onCreate={() => navigation.navigate(NavigationPages.REMINDER_SETTINGS)}
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
