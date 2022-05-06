import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ReminderCard from './ui/molecules/ReminderCard';
import Recurrence from './types/Recurrence';
import { Reminder } from './types/Reminder';
import MultiselectWeekdaysGroup from './ui/organisms/MultiselectWeekdaysGroup';
import Navbar from './ui/organisms/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title='Home'></Navbar>
      <ReminderCard
        reminder={
          new Reminder(
            Recurrence.WEEKLY,
            "Monday", 16, 30, 7,
          )
        }
        onEdit={() => console.log("Edit")}
        onDelete={() => console.log("Delete")} 
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
