import React from "react";
import { StyleSheet, View } from "react-native";
import NavigationPages from "../../types/NavigationPages";
import Recurrence from "../../types/Recurrence";
import { Reminder } from "../../types/Reminder";
import MultiselectWeekdaysGroup from "../organisms/MultiselectWeekdaysGroup";
import Navbar from "../organisms/Navbar";
import ReminderCardGroup from "../organisms/ReminderCardGroup";

function Home( {navigation} ) {
  return (
    <View style={styles.container}>
      <ReminderCardGroup
        // reminder={new Reminder(Recurrence.WEEKLY, "Monday", 16, 30, 7)}
        onEdit={() => navigation.navigate(NavigationPages.REMINDER_SETTINGS)}
        onDelete={() => console.log("Delete")}
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
