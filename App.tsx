import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ReminderCard from './ui/molecules/ReminderCard';
import Recurrence from './types/Recurrence';
import MultiselectWeekdaysGroup from './ui/organisms/MultiselectWeekdaysGroup';
import Navbar from './ui/organisms/Navbar';
import Dropdown from './ui/atoms/Dropdown';


export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title='Home'></Navbar>
      <MultiselectWeekdaysGroup title='Weekday' elements={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}></MultiselectWeekdaysGroup>
      <Dropdown></Dropdown>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    backgroundColor: '#fff',
  },
});
