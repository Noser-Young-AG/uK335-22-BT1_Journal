import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import NavigationPages from "../../types/NavigationPages";
import { Reminder } from "../../types/Reminder";
import ReminderCardGroup from "../organisms/ReminderCardGroup";
import { loadReminder, deleteReminder } from "../../utils/Persistence";
import { useFocusEffect } from "@react-navigation/native";
import { cancelAllNotifications } from "../../service/ReminderNotification";

/**
 *
 * @param navigation used for navigating through pages with the help of an enum that consists of pages {@link NavigationPages}
 *
 * the {@link Home } function is a page that consists of the {@link ReminderCardGroup} molecule. This Card contains all informations
 * about the reminder after its creation
 *
 *
 */
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
      loadReminder()
        .then(r => setReminder(r))
        .catch(e => console.log(e));
    }, [])
  );

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
