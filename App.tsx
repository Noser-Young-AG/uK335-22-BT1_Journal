import { StatusBar } from 'expo-status-bar';
import ButtonElement from './ui/atoms/ButtonElement';
import FabElement from './ui/atoms/FabElement';
import TitleElement from './ui/atoms/TitleElement';
import ActionButtons from './ui/organisms/ActionButtons';
import { StyleSheet, Text, View } from 'react-native';
import ReminderCard from './ui/molecules/ReminderCard';
import Recurrence from './types/Recurrence';
import { Reminder } from './types/Reminder';
import MultiselectWeekdaysGroup from './ui/organisms/MultiselectWeekdaysGroup';
import Navbar from './ui/organisms/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <TitleElement name={'NO REMINDERS SET'}></TitleElement>
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
