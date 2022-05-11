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
import RecurrenceGroup from './ui/molecules/RecurrenceGroup';
import NotificationForReminder from './service/NotificationForReminder';

export default function App() {
  return (
    <View style={styles.wrapper}>
      <StatusBar style="auto" />
      <NotificationForReminder></NotificationForReminder>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  buttonsWrapper: {
    marginTop: 50,
  },
  buttonWrapper: {
    marginBottom: 20,
  },
 });
