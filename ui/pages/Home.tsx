import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import NavigationPages from "../../types/NavigationPages";
import { Reminder } from "../../types/Reminder";
import ReminderCardGroup from "../organisms/ReminderCardGroup";
import { loadReminder, deleteReminder } from "../../utils/Persistence";
import { useFocusEffect } from "@react-navigation/native";
import { cancelAllNotifications } from "../../service/ReminderNotification";

/**
 * Home displays all content visible on the Home page.
 * @param navigation  Used for navigating through pages with the help of an enum that consists of pages {@link NavigationPages}
 *  <br/>
 * the {@link Home } function is a page that consists of the {@link ReminderCardGroup} molecule. This Card contains all informations
 * about the reminder after its creation
 *
 *
 */
function Home({ navigation }) {
  const [reminder, setReminder] = useState<Reminder>();

  useEffect(() => {
    const localReminder = loadReminder();
    localReminder.then((r) => {
      setReminder(r);
    });
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadReminder()
        .then(r => setReminder(r))
        .catch(e => console.log(e));
    }, [])
  );

  useEffect(() => {
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
